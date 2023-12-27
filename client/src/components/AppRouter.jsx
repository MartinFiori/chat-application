import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LayoutPrivadas from '../layouts/LayoutPrivadas.jsx'
import Chat from '../views/Chat.jsx'
import Login from '../views/Login.jsx'
import Register from '../views/Register.jsx'

export default function AppRouter() {
  const content = (<BrowserRouter>
    <Routes>
      <Route exact path='/' element={<LayoutPrivadas />}>
        <Route exact path='/' element={<Chat />} />
      </Route>
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
    </Routes>
  </BrowserRouter>)
  return content
}
