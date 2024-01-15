const express = require("express");
// const routes = require("./routes");

// Helpers
// const { errorHandler } = require("./helpers/express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Hola</h1>");
});

// Routes
// app.use("/", routes);

// // Error handler
// app.use(errorHandler());

module.exports = app;
