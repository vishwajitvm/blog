import React from 'react'
import { useState } from 'react'

export default function HideAndShowElement() {
    const [status,setStatus] = useState(true)
  return (
    <div>
      {
        status?<div id="wrapper">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magnam voluptates minima saepe veniam exercitationem! Animi doloribus sed sint consequatur voluptatibus. Repellat, cum et modi molestias voluptatem blanditiis voluptas sint, accusantium sit eius aliquam cum totam eligendi atque? Tempore molestias eum dolore sunt corrupti, </p>
      </div>:null
      }

      <button onClick={()=>setStatus(false)}> Hide </button> &nbsp;
      <button onClick={()=>setStatus(true)}> Show </button> &nbsp;

      <button onClick={()=>setStatus(!status)}> Toggel </button>


    </div>
  )
}
