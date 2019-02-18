import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchMessages} from '../store'
import {Channel} from './index'

class ChannelList extends Component {
  componentDidMount() {
    // fetchchannelsByserver on page load()
  }

  renderChannels(channelArr) {
    return channelArr.map(channel => (
      <Channel key={channel.id} props={channel} />
    ))
  }

  render() {
    const {channels} = this.props
    return (
      <div>
        <small>ChannelList Component</small>
        {channels && this.renderChannels(channels)}
      </div>
    )
  }
}

const mapState = state => {
  return {
    channels: state.channels
  }
}
const mapDispatch = dispatch => {
  return {
    loadMessages(id) {
      dispatch(fetchMessages(id))
    }
  }
}
export default connect(mapState, mapDispatch)(ChannelList)
