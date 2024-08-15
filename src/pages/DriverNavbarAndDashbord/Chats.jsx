import React, { useEffect, useRef } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import ScrollToBottom from "react-scroll-to-bottom";
import { css } from "@emotion/css";
const Chats = ({ messages, currentUserRole }) => {
  const ROOT_CSS = css({
    height: "80%",
    maxHeight: "80vh",
    overflowY: "auto",
  });
  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <ScrollToBottom className={ROOT_CSS} checkInterval={100}>
      <Box sx={{ padding: "20px" }}>
        {messages.map((msg, index) => {
          const isOwnMessage = msg.role === currentUserRole;
          return (
            <Box key={index} sx={{ mb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: isOwnMessage ? "flex-end" : "flex-start",
                  alignItems: "flex-end",
                }}
              >
                {!isOwnMessage && (
                  <Avatar
                    src={
                      msg.profilePic
                        ? `../../../server/uploads/${msg.profilePic
                            .split("\\")
                            .pop()}`
                        : "/static/images/avatar/1.jpg"
                    }
                    sx={{ mr: 1, width: 30, height: 30 }}
                  />
                )}
                <Box
                  sx={{
                    background: isOwnMessage ? "#DCF8C6" : "#F2F2F2",
                    borderRadius: "10px",
                    padding: "10px 15px",
                    maxWidth: "70%",
                  }}
                >
                  <Typography variant="body1" color="#000">
                    {msg.text}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      textAlign: "right",
                      mt: 0.5,
                      color: "#5A5A5A",
                    }}
                  >
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Typography>
                </Box>
                {isOwnMessage && (
                  <Avatar
                    src={
                      msg.profilePic
                        ? `../../../server/uploads/${msg.profilePic
                            .split("\\")
                            .pop()}`
                        : "/static/images/avatar/1.jpg"
                    }
                    sx={{ ml: 1, width: 30, height: 30 }}
                  />
                )}
              </Box>
            </Box>
          );
        })}
        <div ref={messagesEndRef} />
      </Box>
    </ScrollToBottom>
  );
};

export default Chats;
