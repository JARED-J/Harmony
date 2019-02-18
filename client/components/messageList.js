import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Message} from './index'

class MessageList extends Component {
  renderMessages(messArr) {
    return messArr.map(message => <Message key={message.id} props={message} />)
  }

  render() {
    const {messages} = this.props
    return (
      <div>
        <small>MessageList</small>
        {messages && this.renderMessages(messages)}
      </div>
    )
  }
}

const mapState = state => {
  return {
    messages: state.messages
  }
}

export default connect(mapState)(MessageList)
