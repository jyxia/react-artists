import React, { Component, PropTypes } from 'react'

export default class Message extends Component {
  render() {
    const { isFetching, showError } = this.props

    let message = ''
    if (isFetching) message = 'Loading...'
    if (showError) message = 'No artists found, please try other keywords.'
    return (
      <div className="message">
        <h3> {message} </h3>
      </div>
    )
  }
}

Message.propTypes = {
  isFetching: PropTypes.bool,
  showError: PropTypes.bool
}
