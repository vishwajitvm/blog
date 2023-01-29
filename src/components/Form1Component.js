import React from "react";
import { useState } from "react";

export default function Form1Component() {
  const [name,setName] = useState("") ;
  const [email,setEmail] = useState("") ;
  const [city,setCity] = useState("") ;
  const [course,setCourse] = useState("") ;
  const [language,setLanguage] = useState(false) ;

  function getFormData(e) {
    e.preventDefault();
    console.log("name:=>" + name +" , " +  "email:=>" + email +" , " + "city:=>" + city +" , " + "course:=>" + course +" , " + "language:=>" + language   );
  }
  return (
    <div>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} /> <br /> 
        <br />
        <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} /> <br />
        <br />
        <input type="text" placeholder="Enter your City name" onChange={(e)=>setCity(e.target.value)} /> <br />
        <br />
        <select onChange={(e)=>setCourse(e.target.value)}>
          <option> Select Course Intrust </option>
          <option value="Graphic design"> Graphics design </option>
          <option value="Web development"> Web development </option>
          <option value="Web Design"> Web Design </option>
          <option value="Database Engineer"> Database Engineer </option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e)=>setLanguage(e.target.checked)} /> <span>Can you speak english</span> <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
