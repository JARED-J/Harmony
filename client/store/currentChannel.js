const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL'

// INITIAL STATE
const defaultChannel = null

// ACTION CREATORS
export const setCurrentChannel = title => ({type: SET_CURRENT_CHANNEL, title})

// REDUCER
export default function(state = defaultChannel, action) {
  switch (action.type) {
    case SET_CURRENT_CHANNEL:
      return {...state, title: action.title}
    default:
      return {...state, title: defaultChannel}
  }
}
