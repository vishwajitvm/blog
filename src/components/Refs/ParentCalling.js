import React from 'react'
import RefsClassComponent from './RefsClassComponent'
import RefsFunctionalComponent from './RefsFunctionalComponent'

export default function ParentCalling() {
  return (
    <div>
      <h1>Refs</h1>
      <RefsClassComponent />
      <RefsFunctionalComponent />
    </div>
  )
}
