import { REQUEST_ARTISTS, RECEIVE_ARTISTS, REQUEST_DEFAULT_ARTISTS,
  RECEIVE_NO_ARTISTS } from '../actions'
import preloadedArtists from '../presetData'

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
  items: []
}, action) {
  switch (action.type) {
  case REQUEST_DEFAULT_ARTISTS:
    return Object.assign({}, state, {
      isFetching: false,
      items: preloadedArtists
    })
  case REQUEST_ARTISTS:
    return Object.assign({}, state, {
      isFetching: true
    })
  case RECEIVE_ARTISTS:
    return Object.assign({}, state, {
      isFetching: false,
      items: getArtists(action.artists)
    })
  case RECEIVE_NO_ARTISTS:
    return Object.assign({}, state, {
      isFetching: false
    })
  default:
    return state
  }
}
