const dotenv = require("dotenv");
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
dotenv.config({ path: envFile });

const express = require("express");
const cors = require("cors");
const sequelize = require("./src/config/sequelize");
const Riders = require("./src/models/Riders");
const Drivers = require("./src/models/Drivers");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
let allRoutes = require("./src/Routes/index"); // api endpoints
// Routes
app.use(allRoutes);
app.use(express.static("../dist")); // frontend
app.use(express.urlencoded({ extended: true })); //req.body
app.use(express.json()); //req.body

// error handler middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ status: false, data: error });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
let main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to Database");
    // await sequelize.sync({ force: true });
    await Riders.sync({ force: true });
    await Drivers.sync({ force: true });
    console.log("Models synchronized successfully");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
  main();
});
