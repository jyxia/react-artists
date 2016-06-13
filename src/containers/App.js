import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ArtistsContainer from '../components/Artists'
import SearchBox from '../components/SearchBox'
import Message from '../components/Message'
import * as Actions from '../actions'

class App extends Component {

  render() {
    const { isFetching, showError, artists, fetchArtistsIfNeed, dismissErrors } = this.props
    return (
      <div className="main">
        <SearchBox
          fetchArtistsIfNeed={fetchArtistsIfNeed}
          dismissErrors={dismissErrors}
          isFetching={isFetching}
        />
        <Message showError={showError} isFetching={isFetching} />
        <ArtistsContainer showError={showError} artists={artists} />
      </div>
    )
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  showError: PropTypes.bool,
  artists: PropTypes.array.isRequired,
  fetchArtistsIfNeed: PropTypes.func.isRequired,
  dismissErrors: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { artistList } = state
  const { isFetching, showError, items: artists } = artistList || {
    isFetching: true,
    showError: false,
    items: []
  }
  return {
    isFetching,
    showError,
    artists
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
