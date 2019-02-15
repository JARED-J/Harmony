import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchServers} from '../store'

class MainScreen extends Component {
  componentDidMount() {
    const {id} = this.props.user
    this.props.loadServers(id)
  }

  render() {
    return <div>Main Screen Component</div>
  }
}

// CONTAINER
const mapState = state => {
  return {
    servers: state.servers,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    loadServers(id) {
      dispatch(fetchServers(id))
    }
  }
}

export default connect(mapState, mapDispatch)(MainScreen)

// PROP TYPES
MainScreen.propTypes = {
  loadServers: PropTypes.func.isRequired
}
