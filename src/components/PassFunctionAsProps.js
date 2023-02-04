import React from 'react'

export default function PassFunctionAsProps(props) {
  return (
    <div>
      <p>Hello world</p>
      <button onClick={props.data} >Click to to launch , prop function</button>
    </div>
  )
}
