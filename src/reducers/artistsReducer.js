import { RECEIVE_ARTISTS, REQUEST_DEFAULT_ARTISTS } from '../actions'
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

export default function artistList(state = [], action) {
  switch (action.type) {
  case REQUEST_DEFAULT_ARTISTS:
    return [...preloadedArtists]
  case RECEIVE_ARTISTS:
    return getArtists(action.artists)
  default:
    return state
  }
}
