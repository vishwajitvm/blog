import React, { useState } from 'react'

export default function ConditionalRendering() {
    const [logedUser, setLoggedUser] = useState(2) ;
  return (
    <div>
      <h1> Conditional redering ! </h1>

      <div>
        { logedUser == 1?<h4>Welcome user one </h4>
        :logedUser == 2?<h4>Hay there , user two </h4>
        :<h4>Welcome guest </h4> }
      </div>
    </div>
  )
}
