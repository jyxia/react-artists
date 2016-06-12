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
  }

  handleSubmit(event) {
    event.preventDefault()
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
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
}

export default SearchBox
