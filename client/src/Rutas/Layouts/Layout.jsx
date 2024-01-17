import React from "react";
import NavBar from "../../Components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
