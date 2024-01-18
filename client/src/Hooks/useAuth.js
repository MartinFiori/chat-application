import { useContext } from "react";

// context
import { AuthContext } from "../Context/AuthContext";

const useAuth = () => useContext(AuthContext);

export default useAuth;
