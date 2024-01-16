import React, { useState } from 'react'
import { Button, Input, Grid } from "@mui/joy";
import { postMessage } from '../../services/messages'
import { io } from 'socket.io-client'
const socket = io("http://localhost:8080");
export default function ChatFooter() {
  const [message, setMessage] = useState("")

  const handleSetMessage = e => setMessage(e.target.value)

  const handlePostMessage = e => {
    e.preventDefault()
    postMessage({ message })
    socket.emit('message', message)
    setMessage('')
  }
  return (
    <form className="form" onSubmit={handlePostMessage}>
      <Grid container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={10}>
          <Input
            value={message}
            placeholder="Write a message"
            onChange={handleSetMessage}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            type='submit'
            variant="soft"
            style={{ width: "100%" }}  // Make the Button component take up the full width
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
