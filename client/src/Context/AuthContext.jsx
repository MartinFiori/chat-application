import React, { createContext, useState, useMemo } from "react";
const AuthContext = createContext();

const userFromLocalStorage = JSON.parse(
  localStorage.getItem("user_data") || "null"
);

function AuthProvider({ children }) {
  const [logged, setLogged] = useState(!!userFromLocalStorage);
  const [user, setUser] = useState(userFromLocalStorage);

  const handleSetLogged = (boolean, user_data) => {
    setLogged(boolean);
    setUser(user_data);
  };

  // useEffect(() => {
  //   if (logged && !user) {
  //     setUser(localStorage.setItem("user_data", user));
  //   } else {
  //     setUser(null);
  //     localStorage.removeItem("user_data");
  //   }
  //   return () => {
  //     localStorage.removeItem("user_data");
  //   };
  // }, [user]);

  const authData = useMemo(
    () => ({ logged, handleSetLogged, user }),
    [logged, user]
  );

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
