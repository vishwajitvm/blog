import React from 'react'
import { useEffect,useState } from 'react'

export default function UseEffectsHookSimpleComponent() {
    const [count , setCount] = useState(0) ;
    useEffect(
        ()=>{
            console.log("hello world from useEffect");
        }
    )
return (
    <div>
    <h2> Total no of clicks on button {count} </h2>
    <button onClick={()=>setCount(count+1)} > Click to update </button>
    </div>
)
}
