import React, { Component, PropTypes } from 'react'

class SearchBox extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
    if (!event.target.value) {
      this.props.sendMessages('')
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.fetchArtistsIfNeed(this.state.inputText)
  }

  render() {
    return (
      <div className="header">
        <h1> Popular artists </h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Search your artist"
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

SearchBox.propTypes = {
  sendMessages: PropTypes.func.isRequired,
  fetchArtistsIfNeed: PropTypes.func.isRequired
}

export default SearchBox
