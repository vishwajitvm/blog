import React, { useMemo } from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function UseMemeoHooksComponent() {
  const [count,setCount] = useState(0) ;
  const [item,setItem] = useState(10) ;
  
  //dont call like this insted of call this function inside usememo function
  // function CountMultiplier() {
  //   console.warn("called CountMultiplier function "+count);
  //   return count * 5 ;
  // }

  //Use memo function 
  const useMemoCountMultiplier = useMemo(
    //call back function
    function CountMultiplier() {
      console.warn("called CountMultiplier function "+count);
      return count * 5 ;
    },[count]
  )
  return (
    <div>
      <h1>Use memo hook</h1>
      <h2>Update Count : {count} </h2>
      <h2>Update Item : {item} </h2>
      <h2>Update Count x 5 : { useMemoCountMultiplier } </h2><br />

      <Button variant="warning" onClick={()=>setCount(count+1)}>Update Count</Button>{' '}
      <Button variant="success" onClick={()=>setItem(item+1)}>Update Item</Button>{' '}
    </div>
  )
}
