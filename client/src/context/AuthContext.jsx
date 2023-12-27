import React, { createContext, useState, useMemo } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [prueba, setPrueba] = useState('hola')


  const data = useMemo(() => ({
    prueba,
    setPrueba
  }), [prueba]);

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext }