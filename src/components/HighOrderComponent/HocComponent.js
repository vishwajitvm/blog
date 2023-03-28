import React, { useState } from 'react'

export default function HocComponent() {
  return (
    <div>
      <h1>Learn Hight Order Component</h1>
      <HocRed cmp={Counter}/>
      <HocGreen cmp={Counter}/>
      <HocPurple cmp={Counter}/>
    </div>
  )
}

function HocRed(props) {
  return(
    <div>
      <div style={{background:"red",padding:"30px 0px",margin:"10px 45%"}}>
        <h3>Red</h3>
      <props.cmp/>
      </div>
    </div>
  )
}

function HocGreen(props) {
  return(
    <div>
      <div style={{background:"green",padding:"30px 0px",margin:"10px 45%"}}>
      <h3>Green</h3>
      <props.cmp/>
      </div>
    </div>
  )
}

function HocPurple(props) {
  return(
    <div>
      <div style={{background:"purple",padding:"30px 0px",margin:"10px 45%",color:"white"}}>
      <h3>Purple</h3>
      <props.cmp/>
      </div>
    </div>
  )
}


function Counter() {
  const [count , setCount] = useState(0)
  return (
    <div>
      <h3> {count} </h3>
      <button onClick={()=>setCount(count+1)}>Increase Count</button>
    </div>
  )
}
