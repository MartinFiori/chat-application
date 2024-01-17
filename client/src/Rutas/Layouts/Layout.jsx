import React from "react";
import { Outlet } from 'react-router-dom'
import NavBar from "../../Components/Navbar/Navbar";
import useAuth from '../../Hooks/useAuth'

export default function Layout({ }) {
  const { logged } = useAuth()
  console.log(logged)
  return (
    <div>
      {/* <NavBar /> */}
      <h1 style={{ color: 'white' }}>navbar</h1>
      <Outlet />
    </div>
  );
}
