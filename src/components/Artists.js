import React, { Component } from 'react'
import Artist from './Artist/Artist'

export default class Artists extends Component {
  render() {
    return (
      <div className={"container"}>
          {
            this.props.artists.map((artist, index) => {
              return <Artist artist={artist} key={index}/>
            })
          }
      </div>
    )
  }
}
