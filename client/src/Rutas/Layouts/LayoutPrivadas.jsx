import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import Navbar from "../../Components/Navbar/Navbar";

export default function LayoutPrivadas() {
  const { logged } = useAuth();
  if (!logged) return <Navigate to="/login" />;

  return (
    <main style={{ maxWidth: '100vw' }}>
      {/* <Navbar /> */}
      <Outlet />;
    </main>
  );
}
