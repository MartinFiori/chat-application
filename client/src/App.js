import React from "react";
import "./App.css";
// import { io } from "socket.io-client";

import Rutas from "./Rutas/Rutas";

// const socket = io("http://localhost:8080");
function App() {
  // socket.on("connect", () => {
  //   console.log("users", socket.id);
  // });
  return <Rutas />;
}

export default App;
