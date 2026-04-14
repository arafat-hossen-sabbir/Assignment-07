import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const friendContext = createContext();

const Context = ({ children }) => {
  const [storeFriend, setStoreFriend] = useState([]);
  const [storeText, setStoreText] = useState([]);
  const [storeVideo, setStoreVideo] = useState([]);

  const handleCall = (friend) => {
    setStoreFriend((prev) => [
      ...prev,
      { ...friend, type: "call", date: new Date() },
    ]);

    toast(`📞  Call with ${friend.name}`);
  };

  const handleText = (friend) => {
    setStoreText((prev) => [
      ...prev,
      { ...friend, type: "text", date: new Date() },
    ]);

    toast(`💬 Text with ${friend.name}`);
  };

  const handleVideo = (friend) => {
    setStoreVideo((prev) => [
      ...prev,
      { ...friend, type: "video", date: new Date() },
    ]);

    toast(`🎥 Video call with ${friend.name}`);
  };

  const data = {
    storeFriend,
    storeText,
    storeVideo,
    handleCall,
    handleText,
    handleVideo,
  };

  return (
    <friendContext.Provider value={data}>{children}</friendContext.Provider>
  );
};

export default Context;
