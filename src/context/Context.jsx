import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const friendContext = createContext();

const Context = ({ children }) => {
  
  const [storeActivity, setStoreActivity] = useState([]);

  const addActivity = (friend, type, message, icon) => {
    setStoreActivity((prev) => [
      ...prev,
      {
        id: Date.now(),
        friendId: friend.id,
        name: friend.name,
        type,
        date: new Date().toISOString(),
      },
    ]);

    toast(`${icon} ${message} ${friend.name}`);
  };

  const handleCall = (friend) => {
    addActivity(friend, "call", "Call with", "📞");
  };

  const handleText = (friend) => {
    addActivity(friend, "text", "Text with", "💬");
  };

  const handleVideo = (friend) => {
    addActivity(friend, "video", "Video call with", "🎥");
  };

  return (
    <friendContext.Provider
      value={{
        storeActivity,
        handleCall,
        handleText,
        handleVideo,
      }}
    >
      {children}
    </friendContext.Provider>
  );
};

export default Context;
