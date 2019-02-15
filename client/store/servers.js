import axios from 'axios'

const GET_USER_SERVERS = 'GET_USER_SERVERS'
const REMOVE_USER_FROM_SERVER = 'REMOVE_USER_FROM_SERVER'
const DELETE_SERVER = 'DELETE_SERVER'

// INITIAL STATE
const defaultServers = {}

// ACTION CREATORS
const getServers = servers => ({type: GET_USER_SERVERS, servers})
const removeUserServer = removedServerId => ({
  type: REMOVE_USER_FROM_SERVER,
  removedServerId
})
const deleteServer = deletedId => ({
  type: DELETE_SERVER,
  deletedId
})

// THUNK CREATORS
export const fetchServers = uId => async dispatch => {
  try {
    const res = await axios.get(`/api/hserver/${uId}`)
    dispatch(getServers(res.data))
  } catch (err) {
    console.log(err)
  }
}

export const leaveServer = (sId, uId) => async dispatch => {
  try {
    const res = await axios.delete(`/api/hservers/${sId}/user/${uId}`)
    dispatch(removeUserServer(res.data))
  } catch (err) {
    console.log(err)
  }
}

export const destroyServer = (sId, uId) => async dispatch => {
  try {
    const res = await axios.delete(`/api/hservers/`, {
      data: {id: sId, userId: uId}
    })
    dispatch(deleteServer(res.data))
  } catch (err) {
    console.log(err)
  }
}

// REDUCER
export default function(state = defaultServers, action) {
  switch (action.type) {
    case GET_USER_SERVERS:
      return action.servers
    case REMOVE_USER_FROM_SERVER:
      return state.filter(server => {
        return server.id !== action.removedServerId
      })
    case DELETE_SERVER:
      return state.filter(server => {
        return server.id !== action.deletedId
      })
    default:
      return state
  }
}
