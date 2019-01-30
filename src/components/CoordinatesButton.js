// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{

  handleClick = (event) => {
    const arr = [event.screenX, event.screenY]
    this.props.onReceiveCoordinates(arr)
  }

  render(){
    return(
      <button onClick={this.handleClick}>Coordinates</button>
    )
  } // End of render
} // End of CoordinatesButton class
