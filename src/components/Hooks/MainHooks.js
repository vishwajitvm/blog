import React, { useState } from 'react'

// import UseEffectsHookSimpleComponent from './UseEffectsHooksComponts/UseEffectsHookSimpleComponent'
import UseEffectsHooksWithConditionComponent from './UseEffectsHooksComponts/UseEffectsHooksWithConditionComponent'

export default function MainHooks() {
    const[count,SetCount] = useState(0) ;
    const[data,SetData] = useState(0) ;

  return (
    <div>
      {/* <UseEffectsHookSimpleComponent /> */}
      <UseEffectsHooksWithConditionComponent count={count} data={data} />

        <button onClick={()=>SetCount(count + 1)} >Update Count</button> &nbsp;
        <button onClick={()=>SetData(data + 1)} >Update Data</button>

    </div>
  )
}
