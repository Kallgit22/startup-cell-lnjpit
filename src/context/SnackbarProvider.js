import React, { createContext, useContext, useState } from "react";
import Snackbar from "../ui/components/custom/Snackbar";

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [queue, setQueue] = useState([]); // Queue to hold snackbar messages

  const showSnackbar = (message, type = "info") => {
    const newSnackbar = { message, type };
    setQueue((prevQueue) => [...prevQueue, newSnackbar]);

    // Set a timeout to remove the snackbar after a duration
    setTimeout(() => {
      setQueue((prevQueue) => prevQueue.filter((_, index) => index !== 0)); // Remove the first snackbar
    }, 3000); 
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {/* Render all messages in the queue */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', position: 'fixed', bottom: '8%', left: '10%' }}>
        {queue.map((snackbar, index) => (
          <Snackbar key={index} message={snackbar.message} type={snackbar.type} />
        ))}
      </div>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);

