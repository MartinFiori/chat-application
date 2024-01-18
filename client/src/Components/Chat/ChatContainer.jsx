import React, { useState } from "react";
import MessagesContainer from "./MessagesContainer";
import ChatFooter from "./ChatFooter";
import { getMessages } from "../../helpers/messages";
import { io } from "socket.io-client";

export default function ChatContainer({ user }) {
  const [messagesList, setMessagesList] = useState([]);
  const socket = io("http://localhost:8080", {
    auth: { nickname: user.nickname },
  });
  React.useEffect(() => {
    getAndSet();
  }, []);

  const handleEmitMessage = (message) => {
    console.log(message);
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
