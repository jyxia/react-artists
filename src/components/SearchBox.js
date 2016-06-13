import React, { Component } from 'react'

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
    if (!event.target.value) this.props.dismissErrors()
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.fetchArtistsIfNeed(this.state.inputText)
  }

  render() {
    const disabled = !this.state.inputText
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
          <button type="submit" value="Search" disabled={disabled}>Search</button>
        </form>
      </div>
    )
  }
}

export default SearchBox
