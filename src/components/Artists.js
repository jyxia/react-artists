import React, { Component, PropTypes } from 'react'
import Artist from './Artist/Artist'

export default class Artists extends Component {
  render() {
    const { hideArtists, artists, isFetching } = this.props
    const className = hideArtists || isFetching ? 'container hidden' : 'container'
    return (
      <div className={className}>
        {
          artists.map((artist, index) => {
            return <Artist artist={artist} key={index}/>
          })
        }
      </div>
    )
  }
}

Artists.propTypes = {
  artists: PropTypes.array.isRequired,
  isFetching: PropTypes.bool,
  hideArtists: PropTypes.bool
}
