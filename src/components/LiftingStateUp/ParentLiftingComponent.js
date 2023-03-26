import React from 'react'
import ChildLiftingComponent from './ChildLiftingComponent'

export default function ParentLiftingComponent() {
  function reciveDataFromChildComponent(childParam) {
    alert("hello world "+childParam.name+ " " + childParam.email)
  }
  return (
    <div>
      <h2>Parent</h2>
        <ChildLiftingComponent parentToChildFunction={reciveDataFromChildComponent}/>
    </div>
  )
}
