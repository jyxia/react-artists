import React, { Component, PropTypes } from 'react'

export default class Message extends Component {
  render() {
    const { message } = this.props
    return (
      <div className="message">
        <h3> {message} </h3>
      </div>
    )
  }
}

Message.propTypes = {
  message: PropTypes.string.isRequired
}
