import React from 'react'
import { IoIosLogOut } from "react-icons/io";

// import useAuth from '../hooks/useAuth'

export default function Navbar() {
  // const { prueba } = useAuth();

  const content = (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-title'>Chat Aplication</li>
        <li className='logout-btn'>Log out <IoIosLogOut /></li>
      </ul>
    </nav>
  )
  return content
}
