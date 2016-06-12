import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ArtistsContainer from '../components/Artists'
import SearchBox from '../components/SearchBox'
import * as Actions from '../actions'

class App extends Component {
  componentDidMount() {
    const { fetchArtistsIfNeed } = this.props
    fetchArtistsIfNeed()
  }

  render() {
    const { isFetching, artists } = this.props
    return (
      <div>
        <SearchBox />
        {
          isFetching ? <h3> Loading... </h3>
          : <ArtistsContainer artists={artists} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { artistList } = state
  const { isFetching, items: artists } = artistList || {
    isFetching: true,
    items: []
  }
  return {
    isFetching,
    artists
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
