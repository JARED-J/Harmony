import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {ServerAvatar} from './index'
import {fetchServers} from '../store'

class ServerList extends Component {
  componentDidMount() {
    const {id} = this.props.user
    this.props.loadServers(id)
  }

  renderServers(servArr) {
    return servArr.map(server => (
      <ServerAvatar key={server.id} props={server} />
    ))
  }

  render() {
    const {servers} = this.props
    return (
      <div>
        {/*<UserHome />*/}
        {Array.isArray(servers) && this.renderServers(servers)}
        {/* Create or join hserver button => portal*/}
      </div>
    )
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

export default connect(mapState, mapDispatch)(ServerList)

//PROPTYPES
ServerList.propTypes = {
  servers: PropTypes.array,
  loadServers: PropTypes.func.isRequired
}
