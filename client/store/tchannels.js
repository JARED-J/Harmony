const SET_CHANNELS_BY_SERVER_ID = 'SET_CHANNELS_BY_SERVER_ID'

// INITIAL STATE
const defaultChannels = []

// ACTION CREATORS
export const setChannelsByServer = channels => ({
  type: SET_CHANNELS_BY_SERVER_ID,
  channels
})

// REDUCER
export default function(state = defaultChannels, action) {
  switch (action.type) {
    case SET_CHANNELS_BY_SERVER_ID:
      return action.channels
    default:
      return state
  }
}
