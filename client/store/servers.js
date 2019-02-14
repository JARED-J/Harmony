import axios from 'axios'

const GET_USER_SERVERS = 'GET_USER_SERVERS'
const REMOVE_USER_FROM_SERVER = 'REMOVE_USER_FROM_SERVER'

// INITIAL STATE
const defaultServers = {}

// ACTION CREATORS
const getServers = servers => ({type: GET_USER_SERVERS, servers})
const removeServer = removedServer => ({
  type: REMOVE_USER_FROM_SERVER,
  removedServer
})

// THUNK CREATORS
export const fetchServers = uId => async dispatch => {
  try {
    const res = await axios.get(`/api/hserver/${uId}`)
    console.log('res.data', res.data)
    dispatch(getServers(res.data))
  } catch (err) {
    console.log(err)
  }
}

// TODO: Make api route for removeing user from server and returning server Id for reducer
// export const removeServer = (uId) => async dispatch => {
//     try {
//         const res = await axios.get(`/api/hservers/user/${uId}`)
//         dispatch(removeServer(res.data))
//     } catch (err) {
//         console.log(err)
//     }
// }

// REDUCER
export default function(state = defaultServers, action) {
  switch (action.type) {
    case GET_USER_SERVERS:
      return action.servers
    default:
      return state
  }
}
