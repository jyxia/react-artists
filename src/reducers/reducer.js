import { REQUEST_ARTISTS, RECEIVE_ARTISTS } from '../actions'

export default function artistList(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_ARTISTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_ARTISTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.artists
      })
    default:
      return state
  }
}
