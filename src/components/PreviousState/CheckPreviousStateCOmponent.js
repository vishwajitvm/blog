import React, { useState } from 'react'

export default function CheckPreviousStateCOmponent() {
    const [count,setCount] = useState(1) ;
    const [message , setMessage] = useState("Subscribe to get premium Fetures")

    function updateCounter() {
      let rand = Math.floor(Math.random()*10)
      if (isNaN(rand) || rand === undefined || rand === 0) {
        setCount(rand)
          setMessage("Somthing went Wrong") ;
      } else {
          setCount((pre) => {
              if (count > 5) {
                  setMessage("Subscribe to get premium Fetures")
                  setCount(rand) 
              } else {
                  setMessage("You are Subscribed")
                  setCount(rand) 
              }          
          })
      }
  }
  
  return (
    <div>
      <h1>Check Previous condion and do activity according to that</h1>
      <h3> {count} - {message} </h3>
      
      <button onClick={updateCounter}>Click me to Update Counter</button>
    </div>
  )
}
