import React, { Component, PropTypes } from 'react'
import Artist from './Artist/Artist'

export default class Artists extends Component {
  render() {
    const { hideArtists, artists } = this.props
    const className = hideArtists ? 'container hidden' : 'container'
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
  hideArtists: PropTypes.bool
}
