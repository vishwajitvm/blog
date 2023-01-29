import React from 'react'

export default function ClickEventCall() {
  let data  = "vishwajit vm" ;
    function apple() {
        alert(data)
    }

  return (
    <div>
      <h1> { data } </h1>
            <button className="btn btn-success" onClick={apple} >Click me</button> <br />
            <button className="btn btn-success" onClick={()=>alert("hello from inbuild alert")} >Click me to call </button>
    </div>
  )
}
