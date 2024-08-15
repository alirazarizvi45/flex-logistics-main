import React, { createContext, useContext, useState, useCallback } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ serverUrl, children }) => {
  const [socket, setSocket] = useState(null);
  const [socketId, setSocketId] = useState(null);
  const [role, setRole] = useState(null);
  const [onlineStatus, setOnlineStatus] = useState({});
  const connectSocket = useCallback(
    (userRole, userId) => {
      const sock = io(serverUrl, {
        transports: ["websocket"],
      });
      sock.on("connect", () => {
        console.log(
          `${userRole} connected with socket  id  ${sock.id} and user id is : ${userId}`
        );
        setSocketId(sock.id);
        setRole(userRole);

        sock.emit("setRole", { id: userId, role: userRole });
        sock.on("userOnlineStatus", ({ userId, isOnline }) => {
          setOnlineStatus((prevStatus) => ({
            ...prevStatus,
            [userId]: isOnline,
          }));
        });
      });
      setSocket(sock);
    },
    [serverUrl, setSocket]
  );

  const disconnectSocket = useCallback(() => {
    if (socket) {
      socket.disconnect();
      setSocket(null);
      setSocketId(null);
      setRole(null);
    }
  }, [socket]);

  return (
    <SocketContext.Provider
      value={{
        onlineStatus,
        setOnlineStatus,
        socket,
        socketId,
        role,
        connectSocket,
        disconnectSocket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
