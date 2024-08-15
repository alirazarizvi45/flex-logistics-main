import React, { useCallback, useEffect, useState } from "react";
import { Search, Send, Close as CloseIcon } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Nyambura from "../assets/Nyambura.png";
import CommonButton from "./CommonButton";
import { useSocket } from "./SocketContext";
import { CustomizeInput } from "./CustomizeInput";
import Chats from "../pages/DriverNavbarAndDashbord/Chats";
import { getUserByIdAsync } from "../ReducerSlices/user/userSlice";
import axiosInstance from "../constants/axiosInstance";

const RiderChatModel = ({ notificationProps, setnotificationProps }) => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const { socket, role, onlineStatus, setOnlineStatus } = useSocket();

  const dispatch = useDispatch();
  const { tripInfo } = useSelector((state) => state.tripInfo || {});
  console.log("tripInfo in rider chat", tripInfo);
  const { user, userDetails } = useSelector((state) => state.user || {});
  const tripId = tripInfo?.tripId;
  const driverId = tripInfo?.driverId;

  console.log("driverId in rider chat", driverId);

  useEffect(() => {
    if (driverId) {
      dispatch(getUserByIdAsync(driverId));
    }
  }, [dispatch, driverId]);

  useEffect(() => {
    if (userDetails) {
      console.log("Fetched user details in Rider component:", userDetails);
    }
  }, [userDetails]);

  const fetchMessages = useCallback(async () => {
    if (tripId) {
      try {
        const response = await axiosInstance.get(`/get-conversation/${tripId}`);
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }
  }, [tripId]);

  useEffect(() => {
    if (socket && tripId) {
      socket.emit("joinRoom", { roomId: tripId });

      fetchMessages();

      socket.off("receiveMessage");

      socket.on("receiveMessage", (message) => {
        setMessages((prevMessages) => {
          const messageExists = prevMessages.some(
            (msg) =>
              msg.timestamp === message.timestamp && msg.text === message.text
          );
          if (!messageExists) {
            return [...prevMessages, message];
          }
          return prevMessages;
        });
      });
      socket.on("enterChat", () => {
        fetchMessages();
      });
      socket.emit("requestOnlineStatus", { roomId: tripId });
      socket.on("userOnlineStatus", ({ userId, isOnline }) => {
        setOnlineStatus((prevStatus) => ({
          ...prevStatus,
          [userId]: isOnline,
        }));
      });
      return () => {
        socket.off("receiveMessage");
        socket.off("userOnlineStatus");
        socket.off("enterChat");
        socket.emit("leaveRoom", { roomId: tripId });
      };
    }
  }, [socket, tripId, fetchMessages, setOnlineStatus]);

  const handleClose = () => {
    setnotificationProps({ ...notificationProps, modal: false });
  };

  const handleMessage = async () => {
    if (socket && tripId && currentMessage.trim() !== "") {
      const newMessage = {
        tripId,
        senderId: user?.id,
        receiverId: tripInfo?.driverId,
        role: role,
        text: currentMessage,
        profilePic: user?.profile_pic,
        timestamp: new Date(),
      };

      try {
        const response = await axiosInstance.post(
          "/save-conversation",
          newMessage
        );
        console.log("Response from save-conversation:", response.data);

        socket.emit("sendMessage", {
          ...newMessage,
          roomId: tripId,
          receiverId: tripInfo?.driverId,
        });

        socket.emit("notifyDriver", {
          receiverId: tripInfo?.driverId,
        });

        setCurrentMessage("");
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };
  const handleInputChange = (e) => {
    setCurrentMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleMessage();
    }
  };

  const SearchInput = styled(TextField)(({ theme }) => ({
    backgroundColor: "#F7F7F7",
    borderRadius: "5px",
    border: "1px solid #112D4E",
    "& label.Mui-focused": {
      color: "#eeee",
    },
    "& label": {
      color: "#eeee",
      fontFamily: "Russo One",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
    "& .MuiOutlinedInput-root": {
      border: "none",
      "&:hover fieldset": {
        border: "none",
      },
      "& fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
      "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    "& input": {
      color: "#000",
    },
  }));
  const isDriverOnline = onlineStatus[driverId] || false;
  console.log("isDriverOnline", isDriverOnline);
  return (
    <Dialog
      fullScreen
      open={notificationProps?.modal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: {
          backgroundColor: "#fff",
          border: "1px solid #F2B705",
          padding: "30px",
        },
      }}
    >
      <IconButton
        edge="start"
        color="inherit"
        onClick={handleClose}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <Box
              sx={{
                background: "#FFFFFF",
                borderRadius: "10px 10px 0px 0px",
                boxShadow:
                  "5px 0px 10px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
                padding: "20px",
              }}
            >
              <Typography variant="h5" color="#000" fontWeight="bold">
                Messages
              </Typography>
            </Box>
            <Divider color="#949599" sx={{ height: "1px" }} />
            <Box
              sx={{
                background: "#FFFFFF",
                borderRadius: "0px 0px 10px 10px",
                boxShadow:
                  "5px 5px 10px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <SearchInput
                fullWidth
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <Search sx={{ color: "#8E939C" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                  cursor: "pointer",
                  gap: "20px",
                }}
              >
                <Avatar
                  src={
                    userDetails?.profile_pic
                      ? `../../../server/uploads/${userDetails?.profile_pic
                          .split("\\")
                          .pop()}`
                      : Nyambura
                  }
                  alt="Nyambura"
                  width="50px"
                  height="50px"
                />
                <Typography variant="h5" fontWeight="bold" color="#000">
                  {`${userDetails?.firstName} ${userDetails?.lastName}`}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={8} xs={12}>
            <Box
              sx={{
                background: "#373A41",
                borderRadius: "10px 10px 0px 0px",
                boxShadow:
                  "5px 0px 10px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
                padding: "10px 20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  gap: "20px",
                }}
              >
                <Avatar
                  src={
                    userDetails?.profile_pic
                      ? `../../../server/uploads/${userDetails?.profile_pic
                          .split("\\")
                          .pop()}`
                      : Nyambura
                  }
                  alt="Nyambura"
                  width="50px"
                  height="50px"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Typography variant="h5" fontWeight="bold" color="#fff">
                    {`${userDetails?.firstName} ${userDetails?.lastName}`}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color={isDriverOnline ? "#01E726" : "#949599"}
                  >
                    {isDriverOnline ? "Online" : "Offline"}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                background: "#FFFFFF",
                borderRadius: "0px 0px 10px 10px",
                boxShadow:
                  "5px 5px 10px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Chats messages={messages} currentUserRole="rider" />
              <Box sx={{ flex: 1 }} />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CustomizeInput
                  fullWidth
                  value={currentMessage}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                  placeholder="Type a message"
                  sx={{ flexGrow: 1, marginRight: "10px" }}
                />
                <Box
                  sx={{
                    background: "#F2B705",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <IconButton onClick={handleMessage}>
                    <Send sx={{ color: "#fff" }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CommonButton
            onClick={handleClose}
            sx={{
              backgroundColor: "#F2B705",
              borderRadius: "10px",
              padding: "10px",
              color: "#fff",
            }}
          >
            Close Chat
          </CommonButton>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default RiderChatModel;
