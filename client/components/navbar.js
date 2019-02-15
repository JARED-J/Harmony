import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {DashBoard} from './index'

const Navbar = ({isLoggedIn}) => (
  <div>
    <h1>Welcome To Harmony</h1>
    {isLoggedIn ? (
      <div>
        {/* The navbar will show these links after you log in */}
        <DashBoard />
      </div>
    ) : (
      <div>
        {/* The navbar will show these links before you log in */}
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    )}
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
