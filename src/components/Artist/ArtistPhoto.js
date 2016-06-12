import React, { Component } from 'react'

export default class ArtistPhoto extends Component {

  render() {
    return (
        <a>
          <img src={this.props.thumbnailUrl}/>
        </a>
    )
  }
}
