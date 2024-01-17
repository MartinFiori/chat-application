import React, { useState } from "react";
import MessagesContainer from "./MessagesContainer";
import ChatFooter from "./ChatFooter";
import { getMessages } from "../../services/messages";
import { io } from "socket.io-client";
const socket = io("http://localhost:8080", {
  auth: { username: "martinacho" },
});

export default function ChatContainer() {
  const [messagesList, setMessagesList] = useState([]);
  React.useEffect(() => {
    getAndSet();
  }, []);

  const handleEmitMessage = (message) => {
    socket.emit("new-message", { message });
  };
  const getAndSet = async () => {
    const messages = await getMessages();
    setMessagesList(messages);
  };

  socket.on("message-history", (newMessage) => {
    console.log(messagesList, newMessage);
    setMessagesList([...messagesList, newMessage]);
  });

  return (
    <>
      <MessagesContainer messages={messagesList} />
      <ChatFooter handleEmitMessage={handleEmitMessage} />
    </>
  );
}
