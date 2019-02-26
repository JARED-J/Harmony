import React from 'react'
import {connect} from 'react-redux'
import {Channel} from './index'

const ChannelList = props => {
  const {tchannels} = props
  return (
    <div>
      {tchannels
        ? tchannels.map(tchannel => (
            <Channel key={tchannel.id} props={tchannel} />
          ))
        : 'No server selected.'}
      {/** vchannels && vchannels.map(vchannel => (
        <Vchannel key={vchannel.id} props={vchannel} />
      ))*/}
    </div>
  )
}

const mapState = state => {
  return {
    tchannels: state.tchannels
  }
}

export default connect(mapState)(ChannelList)
