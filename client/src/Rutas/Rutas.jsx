import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chat from '../Components/Chat/screen/Index'

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Chat />} />
        <Route path='/register' element={<Chat />} />
        <Route path='/login' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}
