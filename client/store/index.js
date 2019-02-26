import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import servers from './servers'
import messages from './messages'
import tchannels from './tchannels'
import currentChannel from './currentChannel'
import showUsers from './showUsers'

const reducer = combineReducers({
  user,
  servers,
  messages,
  tchannels,
  currentChannel,
  showUsers
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './servers'
export * from './messages'
export * from './tchannels'
export * from './currentChannel'
export * from './showUsers'
