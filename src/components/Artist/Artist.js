import React, { Component } from 'react'
import ArtistPhoto from './ArtistPhoto'
import ArtistText from './ArtistText'

export default class Artist extends Component {
  render() {
    return (
      <div className="galleryItem">
        <ArtistPhoto thumbnailUrl={this.props.artist.imageurl} />
        <ArtistText text={this.props.artist.name} description={this.props.artist.description} />
      </div>
    )
  }
}
