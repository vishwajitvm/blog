import React, { Component } from 'react'

export default class ShouldComponentUpdateComponent extends Component {
  constructor() {
    super() ;
    this.state={
      count: 0,
    }
  }

  shouldComponentUpdate() {
    if(this.state.count < 10) {
      return true ;  //if true than it will render the updated state uptill 10 only
    }
    return false ;
  }

  render() {
    return (
      <div>
        <h2>No of Clicks on button {this.state.count} </h2>
        <button onClick={()=>{this.setState({count:this.state.count + 1 })}} >Click on me</button>
      </div>
    )
  }
}
