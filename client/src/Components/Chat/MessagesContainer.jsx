import React from "react";

export default function MessagesContainer({ messages }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {messages?.map((el) => (
        <p>
          {el.nickname}: {el.message}
        </p>
      ))}
    </div>
  );
}
