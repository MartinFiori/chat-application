import React from "react";

export default function Chat() {
  console.log("hola");
  const chat_view = (
    <section className="chat-container">
      <div className="chat-history"></div>
      <form className="chat-text-container">
        <input
          type="textarea"
          name=""
          id=""
          className="text-chat"
        />
        <input
          type="submit"
          value="Enviar"
          className="text-btn"
        />
      </form>
    </section>
  );
  return chat_view;
}
