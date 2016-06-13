import { REQUEST_ARTISTS, RECEIVE_ARTISTS, REQUEST_DEFAULT_ARTISTS,
  RECEIVE_NO_ARTISTS, DISMISS_ERROR } from '../actions'
import preloadedArtists from '../data'

function getArtists(artists) {
  return artists.map(artist => {
    return {
      imageurl: `http://iscale.iheart.com/catalog/artist/${artist.id}/?ops=fit(250,0)`,
      description: artist.bio,
      name: artist.name
    }
  })
}

export default function artistList(state = {
  isFetching: false,
  showError: false,
  items: []
}, action) {
  switch (action.type) {
  case REQUEST_DEFAULT_ARTISTS:
    return Object.assign({}, state, {
      isFetching: false,
      showError: false,
      items: preloadedArtists
    })
  case REQUEST_ARTISTS:
    return Object.assign({}, state, {
      isFetching: true,
      showError: false
    })
  case RECEIVE_ARTISTS:
    return Object.assign({}, state, {
      isFetching: false,
      showError: false,
      items: getArtists(action.artists)
    })
  case RECEIVE_NO_ARTISTS:
    return Object.assign({}, state, {
      isFetching: false,
      showError: true
    })
  case DISMISS_ERROR:
    return Object.assign({}, state, {
      showError: false
    })
  default:
    return state
  }
}
