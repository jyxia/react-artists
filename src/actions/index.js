import fetch from 'isomorphic-fetch'

export const REQUEST_ARTISTS = 'REQUEST_ARTISTS'
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS'
export const REQUEST_DEFAULT_ARTISTS = 'REQUEST_DEFAULT_ARTISTS'
export const RECEIVE_NO_ARTISTS = 'RECEIVE_NO_ARTISTS'
export const DISMISS_ERROR = 'DISMISS_ERROR'

function requestArtists(keywords) {
  return {
    type: REQUEST_ARTISTS,
    keywords: keywords
  }
}

function receiveArtists(artists) {
  return {
    type: RECEIVE_ARTISTS,
    artists: artists
  }
}

function receiveNoArtists() {
  return {
    type: RECEIVE_NO_ARTISTS,
  }
}

function requestDefaultArtists() {
  return {
    type: REQUEST_DEFAULT_ARTISTS
  }
}

function dismissError() {
  return {
    type: DISMISS_ERROR
  }
}

function fetchArtists(keywords) {
  return dispatch => {
    dispatch(requestArtists(keywords))
    return fetch(`/api/search?keywords=${keywords}`)
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {
          dispatch(receiveArtists(json))
        } else {
          dispatch(receiveNoArtists())
        }
      })
  }
}

export function fetchArtistsIfNeed(keywords) {
  return (dispatch, getState) => {
    if (!keywords) return dispatch(requestDefaultArtists())
    return dispatch(fetchArtists(keywords))
  }
}

export function dismissErrors() {
  return dispatch => {
    dispatch(dismissError())
  }
}
