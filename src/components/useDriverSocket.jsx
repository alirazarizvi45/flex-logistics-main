import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const useDriverSocket = (serverUrl) => {
  const [driverSocketId, setDriverSocketId] = useState(null);
  const socket = useMemo(() => io(serverUrl), [serverUrl]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log(`Driver with the id ${socket.id} has been Connected`);
      setDriverSocketId(socket.id); // Set the driver socket id when connected
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return { socket, driverSocketId }; // Return socket instance and driver socket id
};

export default useDriverSocket;
