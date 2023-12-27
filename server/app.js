// imports
const express = require("express");
const cors = require("express");
const routes = require('./src/routes/routes.js')
const { Server } = require('socket.io')
const io = new Server(7000, {
  cors: {
    origin: '*'
  }
})
const app = express();
const PORT = process.env.PORT || 8080;

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/backend', routes)

io.on('connection', (socket => {
  socket.emit('hello', 'world')

  socket.on('howdy', (arg) => {
    {
      console.log(arg)
    }
  })
}))

app.listen(PORT, () => {
  console.log("");
  console.log("-".repeat(100));
  console.log(
    'Servidor de procesos corriendo en "http://localhost:' + PORT + '"',
  );
  console.log("-".repeat(100));
  console.log(
    "Último cambio: " + new Date().toString().slice(16, 25).trim() + "hs",
  );
  console.log("");
});
