module.exports = (socket, io) => {
  socket.on("new-message", ({ message }) => {
    console.log("-".repeat(100), {
      nickname: socket.handshake.auth.nickname,
      message,
    });
    io.emit("message-history", {
      nickname: socket.handshake.auth.nickname,
      message,
    });
  });
};
