import React from "react";

export default function MessagesContainer({ messages }) {
  // if (!messages.length) return;
  console.log({ messages });
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {messages?.map((message, i) => (
        <p
          key={message.nickname + message.message + i}
          style={{ color: "white", fontSize: "2rem" }}
        >
          {message.nickname}: {message.message}
        </p>
      ))}
    </div>
  );
}
