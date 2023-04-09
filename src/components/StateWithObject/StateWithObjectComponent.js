import React, { useState } from 'react'

export default function StateWithObjectComponent() {
    let user_details = {
        name: 'Vishwajit',
        email: "vishwajitvm@gmail.com",
        state: "New delhi" ,
        pin: 110045
    }
    const [userDetail , setUserDetail] = useState(user_details)
  return (
    <div>
        <div id="formarea">
        <input 
            type="text" 
            name="name" 
            id="name" 
            value={userDetail.name} 
            onChange={(e) => { setUserDetail({...userDetail,name: e.target.value})}} 
        /> 

        <br /><br />

        <input 
            type="email" 
            name="email" 
            id="email" 
            value={userDetail.email} 
            onChange={(e) => { setUserDetail({...userDetail,email: e.target.value})}} 
        />

        <br /><br />

        <input 
            type="text" 
            name="state" 
            id="state" 
            value={userDetail.state} 
            onChange={(e) => { setUserDetail({...userDetail,state: e.target.value})}} 
        />

        <br /><br />

        <input 
            type="number" 
            name="pin" 
            id="pin" 
            value={userDetail.pin} 
            onChange={(e) => { setUserDetail({...userDetail,pin: e.target.value})}} 
        />

        </div>
      <h1>State with Object</h1>
      <h4>
      <li> {userDetail.name} </li>
      <li> {userDetail.email} </li>
      <li> {userDetail.state} </li>
      <li> {userDetail.pin} </li>
      </h4>
    </div>
  )
}
