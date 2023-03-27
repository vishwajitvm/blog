import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useRef } from 'react';

export default function RefsFunctionalComponent() {
  let inputRef = useRef(null) ;

  function handleInput() {
    console.warn("Function Calleed");
    inputRef.current.value = "vishwajit vm" //setting the value
    inputRef.current.focus() //focus on current input
    inputRef.current.style.color = "red" //changing the color of current input text
    // inputRef.current.style.display = "none" //hide and show the selected input
  }
  return (
    <div>
      <h3>Refs functional component</h3>
      <div>
        <h3>Refs Class component</h3>
        {/* <InputGroup className="mb-3 mx-5" style={{width: "1800px"}}>
        <InputGroup.Text id="basic-addon1">UserName</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup> */}

      <input type="text" name="name" id="name" ref={inputRef} />
      <button onClick={handleInput} >Click to maipulate Dom</button>
      </div>
    </div>
  )
}
