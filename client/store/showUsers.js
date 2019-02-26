const BOOL_SHOW_USERS = 'BOOL_SHOW_USERS'

// INITIAL STATE
const defaultBool = false

// ACTION CREATORS
export const setShowUsers = bool => ({type: BOOL_SHOW_USERS, bool})

// REDUCER
export default function(state = defaultBool, action) {
  switch (action.type) {
    case BOOL_SHOW_USERS:
      return {...state, bool: action.bool}
    default:
      return {...state, bool: defaultBool}
  }
}
