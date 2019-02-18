import React from 'react'

const Message = ({props}) => {
  const {id, content} = props
  console.log(props)
  return (
    <div>
      <small>{content}</small>
    </div>
  )
}

export default Message
