import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'
import {SideBar} from './index'

const Navbar = ({isLoggedIn}) => (
  <div>
    <h1>Welcome To Harmony</h1>
    {isLoggedIn && <SideBar />}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

export default connect(mapState)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
