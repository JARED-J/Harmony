import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setChannelsByServer} from '../store'

const ServerAvatar = ({props, setChannels}) => {
  const {imgUrl, id, title, tchannels} = props
  return (
    <div onClick={() => setChannels(tchannels)}>
      <small>ServerAvatar Component</small>
      <Link to={`/server/${id}`}>
        <img className="" src={imgUrl} alt={title} />
      </Link>
    </div>
  )
}

const mapDispatch = dispatch => {
  return {
    setChannels(channels) {
      dispatch(setChannelsByServer(channels))
    }
  }
}

export default connect(null, mapDispatch)(ServerAvatar)
