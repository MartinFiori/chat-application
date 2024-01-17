module.exports = (socket, io) => {
  socket.on("message", (message) => {
    io.emit("message-history", message);
  });
};
