import React, { createContext, useState, useMemo } from "react";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [logged, setLogged] = useState('martin');

  const authData = useMemo(
    () => ({ logged }),
    [logged]
  );


  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
