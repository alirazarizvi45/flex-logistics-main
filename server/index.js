// Load environment variables from .env file
const dotenv = require("dotenv");
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
dotenv.config({ path: envFile });

// Import necessary modules
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("./src/config/passport");
const sequelize = require("./src/config/sequelize");

const path = require("path");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { createServer } = require("http");
const { Server } = require("socket.io");
const cookieParser = require("cookie-parser");

// Initialize the Express app
const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3001;

// Middlewares
app.set("trust proxy", 1);

// Parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3001",
    ],
    credentials: true,
  })
);

// Set up cookie parser
app.use(cookieParser());

// Configure session management
const sessionStore = new SequelizeStore({
  db: sequelize,
  expiration: 24 * 60 * 60 * 1000,
});
app.use(
  session({
    store: sessionStore,
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
    },
  })
);

// Initialize Passport for authentication
app.use(passport.initialize());
app.use(passport.session());

// Import and use API routes
const allRoutes = require("./src/Routes/index");
const {
  setUserOnlineStatusController,
  getUserOnlineStatus,
} = require("./src/Controllers");

app.use(allRoutes);

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ status: false, data: error });
});

// Serve static files
app.use(express.static("../dist"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

// Socket.io setup
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3001",
    ],
    credentials: true,
  },
});

// Store socket IDs for drivers and riders
const driverSocketMap = new Map();
const riderSocketMap = new Map();
const driverLocations = new Map();
io.on("connection", (socket) => {
  let userRole = null; // To store the role of the user for disconnection
  let userId = null;

  socket.on("setRole", async ({ id, role }) => {
    userId = id;
    userRole = role; // Store the role for later use in disconnection

    socket.on("driverLocation", (locationData) => {
      const { driverId, latitude, longitude } = locationData;
      driverLocations.set(driverId, {
        latitude,
        longitude,
        socketId: socket.id,
      });
      console.log(
        `updated location for driver ${driverId}: ${latitude}, ${longitude}`
      );
    });

    const updated = await setUserOnlineStatusController({
      userId,
      isOnline: true,
    });

    if (updated) {
      if (role === "driver") {
        driverSocketMap.set(userId, socket.id);
      } else if (role === "rider") {
        riderSocketMap.set(userId, socket.id);
      }
      socket.on("requestOnlineStatus", async ({ roomId }) => {
        try {
          const riderId = riderSocketMap.keys().next().value; // Assuming one rider per room
          const driverId = driverSocketMap.keys().next().value; // Assuming one driver per room

          // Fetch the online status of both rider and driver
          const riderStatus = riderId
            ? await getUserOnlineStatus(riderId)
            : null;
          const driverStatus = driverId
            ? await getUserOnlineStatus(driverId)
            : null;

          // Emit the statuses back to the client
          if (riderId) {
            socket.emit("userOnlineStatus", {
              userId: riderId,
              isOnline: riderStatus,
            });
          }
          if (driverId) {
            socket.emit("userOnlineStatus", {
              userId: driverId,
              isOnline: driverStatus,
            });
          }
        } catch (error) {
          console.error("Error fetching online status:", error);
        }
      });
      console.log(
        `The ${role} with user id ${userId} and socket id ${socket.id} connected.`
      );
    }
  });
  socket.on("disconnect", async () => {
    if (userId) {
      const updated = await setUserOnlineStatusController({
        userId,
        isOnline: false,
      });
      if (updated) {
        if (userRole === "driver") {
          driverSocketMap.delete(userId);
        } else if (userRole === "rider") {
          riderSocketMap.delete(userId);
        }
        io.emit("userOnlineStatus", { userId, isOnline: false });
        console.log(
          `The ${userRole} with user id ${userId} and socket id ${socket.id} disconnected.`
        );
      }
    } else {
      console.log("User role or userId not found for disconnection.");
    }
  });
  socket.on("tripRequest", (tripDetails) => {
    const availableDrivers = Array.from(driverSocketMap.keys());
    console.log("AvailableDrivers: ", availableDrivers);
    if (availableDrivers.length === 0) {
      console.log("No available drivers");
      return;
    }

    const driverId =
      availableDrivers[Math.floor(Math.random() * availableDrivers.length)];
    const driverSocketId = driverSocketMap.get(driverId);
    if (driverSocketId) {
      io.to(driverSocketId).emit("tripRequest", {
        ...tripDetails,
      });
      console.log("Trip request sent to driver:", driverId);
    }
  });

  socket.on("tripRequestAccepted", (confirmationMsg) => {
    console.log("Trip request accepted:", confirmationMsg);

    // Notify the rider about the trip acceptance
    const riderSocketId = riderSocketMap.get(confirmationMsg.riderId);
    if (riderSocketId) {
      io.to(riderSocketId).emit("tripRequestAccepted", {
        ...confirmationMsg,
      });
      console.log(
        "Trip acceptance notification sent to rider:",
        confirmationMsg.riderId
      );
    } else {
      console.log(
        "Rider not found for trip acceptance notification:",
        confirmationMsg.riderId
      );
    }

    const roomId = confirmationMsg.tripId;
    socket.join(roomId);
    if (riderSocketId) {
      io.to(riderSocketId).socketsJoin(roomId);
    }
    io.to(roomId).emit("joinTripRoom", { roomId });
    console.log(`Rider and driver joined room: ${roomId}`);
    socket.on("updateTripStatus", (updatedTripInfo) => {
      // console.log("Trip status update received:", updatedTripInfo);

      io.to(updatedTripInfo.tripId).emit("tripStatusUpdated", updatedTripInfo);
    });
  });

  socket.on("sendMessage", (msg) => {
    const { roomId, text, role, receiverId } = msg;
    console.log(`Message received in room ${roomId} from ${role}: ${text}`);
    io.to(roomId).emit("receiveMessage", msg);
    // if (role === "rider") {
    //   const driverSocketId = driverSocketMap.get(receiverId);
    //   if (driverSocketId) {
    //     io.to(driverSocketId).emit("newMessageNotification", {
    //       roomId,
    //       senderId: msg.senderId,
    //       receiverId,
    //     });
    //   }
    // }
  });
  socket.on("joinRoom", async ({ roomId }) => {
    socket.join(roomId);
    console.log(`Socket ${socket.id} joined room ${roomId}`);
  });
  socket.on("enterChat", ({ tripId }) => {
    socket.to(tripId).emit("enterChat");
  });
  socket.on("leaveRoom", async ({ roomId }) => {
    socket.join(roomId);
    console.log(`Socket ${socket.id} leave room ${roomId}`);
  });
});

// Start server and connect to database
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  main();
});

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connected to Database");
    await sequelize.sync();

    console.log("Models synchronized successfully");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}
