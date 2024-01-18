module.exports = (socket, io) => {
  socket.on("new-message", ({ message }) => {
    io.emit("message-history", {
      nickname: socket.handshake.auth.nickname,
      message,
    });
  });
};
