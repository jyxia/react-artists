import React, { Component } from 'react'

export default class ArtistText extends Component {

  render() {
    return (
      <span>
        <h3> {this.props.text} </h3>
        <p> {this.props.description} </p>
      </span>
    )
  }
}
