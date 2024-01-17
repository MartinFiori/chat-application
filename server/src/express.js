const express = require("express");
const routes = require("./routes/index.routes.js");
const morgan = require("morgan");

const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/", routes);

module.exports = app;
