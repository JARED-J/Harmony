import axios from 'axios'

// ACTIONS
const GET_CHANNELS_BY_SERVER = 'GET_CHANNELS_BY_SERVER'

// INITIAL STATE
const defaultChannels = []

// ACTION CREATORS
const getChannels = channels => ({type: GET_CHANNELS_BY_SERVER, channels})

// THUNK CREATORS
export const fetchChannels = sId => async dispatch => {
  try {
    const res = await axios.get(`/api/channel/${sId}`)
    dispatch(getChannels(res.data))
  } catch (err) {
    console.log(err)
  }
}

// REDUCER
export default function(state = defaultChannels, action) {
  switch (action.type) {
    case GET_CHANNELS_BY_SERVER:
      return action.channels
    default:
      return state
  }
}
