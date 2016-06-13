import React, { Component, PropTypes } from 'react'

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

ArtistText.propTypes = {
  text: PropTypes.string.isRequired,
  description: PropTypes.string
}
