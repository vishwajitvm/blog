import React from 'react'
import Table from 'react-bootstrap/Table';

export default function HandelArrayListingComponent() {
    const students = ['vishwajit' , 'shivani' , 'nidhi' , 'poonam'] ;
    const studentDetails = [
        {name: ' Vishwajit' , email: "vishwajit@gmail.com" , state: "new delhi"} ,
        {name: ' Nidhi' , email: "nidhi@gmail.com" , state: "Noida"} ,
        {name: ' Shivani' , email: "Shivani@gmail.com" , state: "Gurugram"} ,
    ]
    //map looping
    return (
        <div>
            <h1>List of students</h1>
            {
                students.map((student,k)=> 
                    <h4 key={k} > Name is:  {student} </h4>
                )
            }

            <h1> Student with full details </h1>
            <Table striped bordered hover variant="dark" > 
            <thead>
                <tr>
                    <th width={300}>Name</th>
                    <th width={300}>Email</th>
                    <th width={300}>State</th>
                </tr>
                </thead>
            <tbody>
                {
                    studentDetails.map((studentDetail , k)=>
                    // <tr key={k}>
                    //     <td width={300}>{studentDetail.name}</td>
                    //     <td width={300}>{studentDetail.email}</td>
                    //     <td width={300}>{studentDetail.state}</td>
                    // </tr>

                    studentDetail.email === 'nidhi@gmail.com' ?
                    <tr key={k}>
                        <td width={300}>{studentDetail.name}</td>
                        <td width={300}>{studentDetail.email}</td>
                        <td width={300}>{studentDetail.state}</td>
                    </tr> : <tr key={k}>
                        <td width={300}>null</td>
                        <td width={300}>null</td>
                        <td width={300}>null</td>
                    </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    )
}
