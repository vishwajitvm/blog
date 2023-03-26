import React, { Component } from 'react'
import { PureComponent } from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


export default class PureDataComponent extends PureComponent {
  constructor () {
    super() ;
    this.state = {
      count: 5 ,
      currentValue: 0
    }
  }
  render() {
    console.warn("check Render " + this.state.currentValue );
    return (
      <div>
        <h2>Pure component</h2>
        <p>Does not call render if currrent state and previous state is same </p>

        <Button variant="success" onClick={()=>this.setState({currentValue:this.state.currentValue != this.state.count ? this.state.currentValue+1 : null  })}>Current  Number  
          <Badge bg="danger"> {this.state.currentValue} </Badge>
        </Button>
      </div>
    )
  }
}
