const PORT = process.env.PORT || 8080;
const app = require("./express.js");

// Socket Server
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

// Events initialization
io.on("connection", (socket) => {
  require("./events.js")(socket, io);
});

httpServer.listen(PORT, () => {
  console.log("");
  console.log("-".repeat(100));
  console.log(`Server running on "http://localhost:${PORT}"`);
  console.log("-".repeat(100));
  console.log("Último cambio: " + new Date().toString().slice(16, 24) + "hs");
  console.log("");
});
