import React, { Component } from 'react'
import { createRef } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default class RefsClassComponent extends Component {
    constructor() {
        super() ;
        this.InputGroupRef = createRef() ;
    }

    componentDidMount() {
        this.InputGroupRef.current.value="hello world"
        console.warn(this.InputGroupRef.current.value);
    }
  render() {
    return (
      <div>
        <h3>Refs Class component</h3>
        <InputGroup ref={this.InputGroupRef} className="mb-3 mx-5" style={{width: "1800px"}}>
        <InputGroup.Text id="basic-addon1">UserName</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      </div>
    )
  }
}
