import React, { Component } from 'react'
import Artist from './Artist/Artist'
import Message from './Message'

export default class Artists extends Component {
  render() {
    const { showError, artists } = this.props
    const className = showError ? "container hidden" : "container"
    return (
      <div className={className}>
        {
          artists.map((artist, index) => {
            return <Artist artist={artist} key={index}/>
          })
        }
      </div>
    )
  }
}
