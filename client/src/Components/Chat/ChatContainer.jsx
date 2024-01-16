import React, { useState } from 'react'
import MessagesContainer from './MessagesContainer';
import ChatFooter from './ChatFooter';
import { getMessages } from '../../services/messages';


export default function ChatContainer() {
  const [messagesList, setMessagesList] = useState([])
  React.useEffect(() => {
    getAndSet()
  }, [])
  const getAndSet = async () => {
    const messages = await getMessages()

    setMessagesList([...messagesList, ...messages])

  }
  return (
    <>
      <MessagesContainer messagesList={messagesList} />
      <ChatFooter />
    </>
  )
}
