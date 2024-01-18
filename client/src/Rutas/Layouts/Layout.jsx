import React from "react";
import { Outlet } from "react-router-dom";
// import NavBar from "../../Components/Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <h1 style={{ color: "white" }}>navbar</h1>
      {/* <NavBar /> */}
      <Outlet />
    </>
  );
}
