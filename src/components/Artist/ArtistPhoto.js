import React, { Component, PropTypes } from 'react'

export default class ArtistPhoto extends Component {

  render() {
    return (
      <a>
        <img src={this.props.thumbnailUrl}/>
      </a>
    )
  }
}

ArtistPhoto.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired
}
