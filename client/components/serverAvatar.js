import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchChannels} from '../store'

const ServerAvatar = ({props, loadChannels}) => {
  const {imgUrl, id, title} = props
  return (
    <div onClick={() => loadChannels(id)}>
      <small>ServerAvatar Component</small>
      <Link to={`/server/${2}`}>
        <img className="" src={imgUrl} alt={title} />
      </Link>
    </div>
  )
}

const mapDispatch = dispatch => {
  return {
    loadChannels(id) {
      dispatch(fetchChannels(id))
    }
  }
}

export default connect(null, mapDispatch)(ServerAvatar)
