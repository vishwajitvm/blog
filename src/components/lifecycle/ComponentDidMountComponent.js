import React, { Component } from 'react'

export default class ComponentDidMountComponent extends Component {
    constructor() {
        super() ;
        console.log("hello, From constructor")
        this.state={
            name: "Vishwajit",
            email: "Vishwajit@gmail.com"
        }
    }

    componentDidMount() {
        console.log("hello, From componentDidMount")
    }
  render() {
    console.log("hello, From Render")
    return (
      <div>
        <h3>Hello world {this.state.name}</h3>
        <h3>Hello world {this.state.email}</h3>
        <button onClick={()=>{ this.setState({ name:"vishwajit vm", email: "vishwajitvm@firmay.in" }) }} >Click me to change email and name</button>
      </div>
    )
  }
}
