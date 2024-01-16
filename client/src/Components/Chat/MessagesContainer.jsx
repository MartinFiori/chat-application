import React from 'react'


export default function MessagesContainer({ messagesList }) {

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>{
      messagesList.map(el => <>
        {el.user}: {el.message}
      </>
      )}</div>
  )
}
