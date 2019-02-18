import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../store'
import {Navbar} from './index'

/**
 * COMPONENT
 */
const UserHome = props => {
  const {userName, email, handleClick} = props
  return (
    <div>
      <h3>Welcome, {userName ? userName : email}</h3>
      <Navbar />
      <div onClick={handleClick}>
        <a href="#">Logout</a>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
