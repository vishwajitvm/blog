import React, { Component } from 'react'

export default class RenderLifeCycleMethodComponent extends Component {
  //state
  constructor() {
    super() ;
    this.state = {
      email: "vishwajit@gmail.com" ,
      name: "vishwajit"
    }
  }
  render() {
    return (
      <div>
        <h3>hello {this.state.name}</h3> 
        <h3>Email: { this.state.email }</h3>
        <button onClick={()=>this.setState({email:"vishwajitvm@gmail.com" , name: "vishwajit vm"})}> Click to change email of user </button>
      </div>
    )
  }
}


