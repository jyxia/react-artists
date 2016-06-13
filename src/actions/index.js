import fetch from 'isomorphic-fetch'

export const REQUEST_ARTISTS = 'REQUEST_ARTISTS'
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS'
export const REQUEST_DEFAULT_ARTISTS = 'REQUEST_DEFAULT_ARTISTS'
export const RECEIVE_NO_ARTISTS = 'RECEIVE_NO_ARTISTS'
export const DISMISS_MESSAGE = 'DISMISS_MESSAGE'
export const SEND_MESSAGE = 'SEND_MESSAGE'

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

function dismissMessage() {
  return {
    type: DISMISS_MESSAGE
  }
}

function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    message: message
  }
}

function fetchArtists(keywords) {
  return dispatch => {
    dispatch(requestArtists(keywords))
    dispatch(sendMessage('Loading...'))
    return fetch(`http://localhost:3000/api/search?keywords=${keywords}`)
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {
          dispatch(receiveArtists(json))
          dispatch(dismissMessage())
        } else {
          dispatch(receiveNoArtists())
          dispatch(sendMessage('No artists found, please try other keywords.'))
        }
      })
      .catch(err => {
        const error = `No network connection, please check the server ${err}`
        dispatch(sendMessage(error))
      })
  }
}

export function fetchArtistsIfNeed(keywords) {
  return dispatch => {
    if (!keywords) return dispatch(requestDefaultArtists())
    return dispatch(fetchArtists(keywords))
  }
}

export function sendMessages(message) {
  return dispatch => {
    dispatch(sendMessage(message))
  }
}
