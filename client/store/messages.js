import axios from 'axios'

// ACTIONS
const GET_MESSAGES_BY_CHANNEL = 'GET_MESSAGES_BY_CHANNEL'

// INITIAL STATE
const defaultMessages = []

// ACTION CREATORS
const getMessages = messages => ({type: GET_MESSAGES_BY_CHANNEL, messages})

// THUNK CREATORS
export const fetchMessages = cId => async dispatch => {
  try {
    const res = await axios.get(`/api/message/${cId}`)
    dispatch(getMessages(res.data))
  } catch (err) {
    console.log(err)
  }
}

// REDUCER
export default function(state = defaultMessages, action) {
  switch (action.type) {
    case GET_MESSAGES_BY_CHANNEL:
      return action.messages
    default:
      return state
  }
}
