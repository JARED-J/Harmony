import React from 'react'
import {connect} from 'react-redux'
import {fetchMessages} from '../store'

const Channel = ({props, loadMessages}) => {
  const {id, title} = props
  return (
    <div onClick={() => loadMessages(id)}>
      <small>{title}</small>
    </div>
  )
}

const mapDispatch = dispatch => {
  return {
    loadMessages(id) {
      dispatch(fetchMessages(id))
    }
  }
}
export default connect(null, mapDispatch)(Channel)
