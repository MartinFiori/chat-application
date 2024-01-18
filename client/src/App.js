import React from "react";

import Rutas from "./Rutas/Rutas";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Rutas />
    </AuthProvider>
  );
  // return <Rutas />;
}

export default App;
