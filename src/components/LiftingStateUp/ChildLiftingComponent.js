import React from 'react'
import Button from 'react-bootstrap/Button';

export default function ChildLiftingComponent(props) {
  const data = {"name": "vishwajit vm" , "email": "Vishwajit@gmail.com"}
  return (
    <div>
      <h3>Child Component  </h3>
      <Button variant="success" onClick={() => props.parentToChildFunction(data)}>Click Me</Button>
    </div>
  )
}
