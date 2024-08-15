import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const useRiderSocket = (serverUrl) => {
  const [riderSocketId, setRiderSocketId] = useState(null);
  const socket = useMemo(() => io(serverUrl), [serverUrl]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log(`Rider with the id ${socket.id} has been Connected`);
      setRiderSocketId(socket.id); // Set the rider socket id when connected
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return { socket, riderSocketId }; // Return socket instance and rider socket id
};

export default useRiderSocket;
