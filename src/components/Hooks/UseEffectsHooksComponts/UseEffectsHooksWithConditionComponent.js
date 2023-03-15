import React, { useEffect, useState } from 'react'

export default function UseEffectsHooksWithConditionComponent(props) {
    useEffect(
        ()=> {
            console.log("calling use effect on update count from props " + props.count );
        } , [props.count]
    ) 

    useEffect(
        ()=> {
            console.log("Data from Props " + props.data );
        } , [props.data]
    ) 

  return (
    <div>
      <h2>
        <span>Cound :: {props.count}</span> <br />
        <span>Data :: {props.data}</span>
      </h2>

    </div>
  )
}
