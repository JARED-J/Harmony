import React from 'react'
import {connect} from 'react-redux'
import {Navbar, MessageContainer, UserContainer} from './index'

const MainContainer = props => {
  return (
    <div>
      <Navbar />
      <MessageContainer />
      {props.showUsers ? <UserContainer /> : null}
    </div>
  )
}

const mapState = state => {
  return {
    showUsers: state.showUsers.bool
  }
}

export default connect(mapState)(MainContainer)
