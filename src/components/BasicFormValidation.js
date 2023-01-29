import React, { useState } from 'react'

export default function BasicFormValidation() {
  //datas [user and password] 
  const [user,setUser] = useState("") ;
  const [password , setPassword] = useState("") ;

  //errors [user and password]
  const [userError , setUserError] = useState(false)
  const [passwordError , setPasswordError] = useState(false)

  //after submit print data and message as well
  const [message,setMessage] = useState("") ;

//on submit function
  function loginHandel(e) {
    e.preventDefault();
    if(user.length <= 5 || password.length <= 5) {
      setMessage("Set correct Credentials")
    }
    else{
      setMessage("User Login Successfully")
    }
  }

  //user id handel(error)
  function userHandel(e) {
    let userValue = e.target.value ;
    if(userValue.length < 3) {
      setUserError(true)
    }
    else{
      setUserError(false)

    }
    setUser(userValue)
  }

  //password handel(error)
  function PasswordHandel(e) {
    let passwordValue = e.target.value ;
    if(passwordValue.length <= 6) {
      setPasswordError(true)
    }
    else{
      setPasswordError(false)
    }
    setPassword(passwordValue) ;
  }

  return (
    <div>
      <h1> React basic Validation! </h1>

      <form onSubmit={loginHandel}>
        <input type="text" placeholder='Enter user id' onChange={userHandel} /> <br />
         {userError?<span> Invalid User ID! </span>:null}
         <br />

        <input type="password" placeholder='Enter password'  onChange={PasswordHandel} /> <br />
         {passwordError?<span> Invalid Password! </span>:null}
         <br />

        <button type="submit"> Login </button> <br /> <br />

        <h4>{message}</h4>

      </form>
    </div>
  )
}
