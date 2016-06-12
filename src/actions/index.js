import fetch from 'isomorphic-fetch'

export const REQUEST_ARTISTS = 'REQUEST_ARTISTS'
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS'

export function requestArtists(keyword) {
  return {
    type: REQUEST_ARTISTS,
    keyword: keyword
  }
}

function receiveArtists(json) {
  return {
    type: RECEIVE_ARTISTS,
    artists: json.slice(0, 10)
  }
}

function fetchArtists(keyword) {
  return dispatch => {
    dispatch(requestArtists(keyword))
    return fetch('http://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => dispatch(receiveArtists(json)))
  }
}

function shouldFetchArtists(state) {

}

export function fetchArtistsIfNeed() {
  return (dispatch, getState) => {
    return dispatch(fetchArtists())
  }
}
