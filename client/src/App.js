import React from "react";

<<<<<<< HEAD
import Rutas from "./Rutas/Rutas";
import { AuthProvider } from "./Context/AuthContext";
=======
import Rutas from "./Rutas/Rutas.jsx";
>>>>>>> ccece63f6e4b5f9e811ef231b5b27313c34c2258

function App() {
  return (
    <AuthProvider>
      <Rutas />
    </AuthProvider>
  );
  // return <Rutas />;
}

export default App;
