import 'babel-polyfill'
import './style/style.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App'
import preloadedArtists from './presetData'

const preloadedState = {
  artistList: {
    isFetching: false,
    items: preloadedArtists
  }
}
const store = configureStore(preloadedState)
const rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
)
