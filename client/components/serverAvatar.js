import React from 'react'
import {Link} from 'react-router-dom'

const ServerAvatar = ({props}) => {
  const {imgUrl, id, title} = props
  return (
    <div>
      <small>ServerAvatar Component</small>
      <Link to={`/hserver/${id}`}>
        <img className="" src={imgUrl} alt={title} />
      </Link>
    </div>
  )
}

export default ServerAvatar
