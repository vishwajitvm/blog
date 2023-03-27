import React from 'react'
import { useState } from 'react'

export default function ReactControlledComponent() {
    const [name , setname] = useState("") ;
    const [email , setEmail] = useState("") ;
  return (
    <div>
      <h1>React Controlled Components</h1>
      <h3>This name,email input is managed by state</h3>
      <input type="text" name="name" id="name" placeholder='Insert Username' value={name} onChange={(e)=>setname(e.target.value)}  /> <br /> <br />
      <input type="email" name="email" id="email" placeholder='Insert Useremail' value={email} onChange={(e)=>setEmail(e.target.value)}  />

    <h3>values</h3>

    <h5>Name: {name} </h5>
    <h5>Email: {email} </h5>
    </div>
  )
}
