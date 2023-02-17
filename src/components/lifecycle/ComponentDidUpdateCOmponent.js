import React, { Component } from 'react'

export default class ComponentDidUpdateCOmponent extends Component {
  constructor () {
    super() ;
    this.state={
      name: "Manish vm",
      count: 0
    }
    console.log("Hello from Constructor method")

  }

  componentDidUpdate(preProps , preState , snapShot) {
    console.log("Hello from Update" , preState);
    if(preState.count === 5) {
      alert("data is same now")
      this.setState({count : 0})  //if count reaches 5 ...than setstate will reset to zero 0
    }
  }

  render() {
    console.log("Hello from render method")
    return (
      <div>
        <h2> hello {this.state.name} { this.state.count }</h2>
        <button onClick={()=>{this.setState({name:"vishwajit vm" , count: this.state.count+1}) }} >Click to change Name</button>
      </div>
    )
  }
}
