import React from 'react'
import { useState } from 'react'

export default function GetInputValue() {
  const [nameData , setNameDate] = useState("Vishwajit vm");
  function UpdateName(val) {
    setNameDate(val.target.value)
  }
  return (
    <div>
      <h3>Insert name to Update</h3>
      <input type="text" onChange={UpdateName} />
      <p> {nameData} </p>
    </div>
  )
}
