import React, { Component, PropTypes } from 'react'
import Artist from './Artist/Artist'

export default class Artists extends Component {
  render() {
    const { showError, artists, isFetching } = this.props
    const className = showError || isFetching ? 'container hidden' : 'container'
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
  showError: PropTypes.bool
}
