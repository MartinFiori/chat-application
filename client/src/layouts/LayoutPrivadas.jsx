import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function LayoutPrivadas() {
  const layoutPrivateRoutes = (
    <>
      <Navbar />
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  );
  return layoutPrivateRoutes;
}
