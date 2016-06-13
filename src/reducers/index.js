import { combineReducers } from 'redux'
import artistList from './artistsReducer'
import message from './messageReducer'

const rootReducer = combineReducers({
  artistList,
  message
})

export default rootReducer
