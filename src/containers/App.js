import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ArtistsContainer from '../components/Artists'
import SearchBox from '../components/SearchBox'
import Message from '../components/Message'
import * as Actions from '../actions'

class App extends Component {

  componentDidMount() {
    const { fetchArtistsIfNeed } = this.props
    fetchArtistsIfNeed('Taylor Swift')
  }

  render() {
    const { alert, artists, fetchArtistsIfNeed, sendMessages } = this.props
    const hideArtists = !alert
    return (
      <div className="main">
        <SearchBox
          fetchArtistsIfNeed={fetchArtistsIfNeed}
          sendMessages={sendMessages}
        />
        <Message message={alert} />
        <ArtistsContainer
          hideArtists={!hideArtists}
          artists={artists}
        />
      </div>
    )
  }
}

App.propTypes = {
  alert: PropTypes.string.isRequired,
  artists: PropTypes.array.isRequired,
  fetchArtistsIfNeed: PropTypes.func.isRequired,
  sendMessages: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { artistList, message } = state
  const artists = artistList || []
  const alert = message || ''
  return {
    artists,
    alert
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
