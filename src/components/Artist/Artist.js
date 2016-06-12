import React, { Component } from 'react'
import ArtistPhoto from './ArtistPhoto'
import ArtistText from './ArtistText'

export default class Artist extends Component {
  render() {
    return (
      <div className={"galleryItem"}>
        <ArtistPhoto thumbnailUrl={this.props.artist.thumbnailUrl}/>
        <ArtistText text={this.props.artist.title}/>
      </div>
    )
  }
}
