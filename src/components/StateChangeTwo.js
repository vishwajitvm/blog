import React from 'react'
import { useState } from 'react'

const initialItems = [
  { id: 0, name: "Vishwajit vm" , email: "VishwajitVm@gmail.com" , School: "Army public school" , location: "Ganganagar"},
  { id: 1, name: "Shivani" , email: "Shivani@gmail.com" , School: "Kendriya Vidyalya" , location: "Chapra"},
  { id: 2, name: "Nidhi" ,  email: "Nidhi@gmail.com" , School: "Army public school" , location: "Ganganagar"},
  { id: 3, name: "Nitish" ,  email: "Nitesh@gmail.com" , School: "Up Goverment school" , location: "Kanpur"},

];


export default function stateChangeTwo() {
  const [students , setStudents] = useState(initialItems) ;
  const [updateStudents , setUpdatedStudents] = useState(students[1]) ;
  return (
    <div>
      <h1>List of students</h1>

      {students.map(student => (
         <button onClick={()=> {setUpdatedStudents(student)} }>{ student.name } </button> 
      ))}

      <p>
        1. name: {updateStudents.name} <br />
        2. Email: {updateStudents.email} <br />
        3. School: {updateStudents.School} <br />
        4. Location: {updateStudents.location} <br />


      </p>
    </div>
  )
}
