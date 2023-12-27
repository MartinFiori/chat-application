import React from 'react';
import './style.css';
// import { io } from 'socket.io-client'
import AppRouter from './components/AppRouter';

// const socket = io('ws://localhost:7000')

function App() {
  // socket.on('hello', (arg) => {
  //   console.log(arg)
  // })
  // React.useEffect(() => {

  //   socket.emit('howdy', "esto cambia un poco")
  // }, [])
  const content = <AppRouter />

  return content;
}

export default App;
