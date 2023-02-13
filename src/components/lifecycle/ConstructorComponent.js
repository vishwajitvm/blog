import React, { Component } from 'react'

export default class ConstructorComponent extends Component {
    constructor() {
        super() ;
        console.log("Constructor is called first before render method") ;
        this.state = {
            name: "vishwajit"
        }
    }
  render() {
    console.log("Render method called after constructor")
    return (
      <div>
        <h1>Hello world {this.state.name} </h1>
        <h5>make sure to define all your states in constructor :-  so that vaibles must be ready be HTML render</h5>
        <h5>Do not call Api in constructor</h5>
      </div>
    )
  }
}


