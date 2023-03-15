import React from 'react'
import Table from 'react-bootstrap/Table';

export default function NestedListComponent() {
    const usersDetails = [
        {
            name: "vishwajit",
            lastName: "vm" ,
            email: "vishwajitvm@gmail.com",
            phoneNumber : "8920352117",
            Addresses : [
                {
                    houseNumber : "10B/14",
                    area : "kailash puri" ,
                    city : "New Delhi" ,
                    pincode: "110045",
                    country : "India"
                } ,
                {
                    houseNumber : "1771",
                    area : "Nangal raya" ,
                    city : "Delhi Cantt" ,
                    pincode: "110042",
                    country : "India"
                },
                {
                    houseNumber : "1472B",
                    area : "Sagarpur" ,
                    city : "Delhi cantt" ,
                    pincode: "110043",
                    country : "India"
                }
            ]
        },

        {
            name: "Nidhi",
            lastName: "Singh" ,
            email: "nidhisingh@yahoo.com",
            phoneNumber : "895426585",
            Addresses : [
                {
                    houseNumber : "1054/140",
                    area : "sector 62" ,
                    city : "Noida" ,
                    pincode: "44054",
                    country : "India"
                } ,
                {
                    houseNumber : "5656B",
                    area : "sector 63" ,
                    city : "Greater Noida" ,
                    pincode: "440545",
                    country : "India"
                } 
            ]
        } ,

        {
            name: "Shivani",
            lastName: "Singh" ,
            email: "Shivanisingh@yahoo.com",
            phoneNumber : "89562035214",
            Addresses : [
                {
                    houseNumber : "B34D",
                    area : "sector 62" ,
                    city : "Gurugram" ,
                    pincode: "878521",
                    country : "India"
                } ,
                {
                    houseNumber : "Hk4454",
                    area : "sector 68" ,
                    city : "Gurugram" ,
                    pincode: "878529",
                    country : "India"
                }
            ]
        }
    ]
  return (
    <div className='bg-dark text-light'>
      <h1>Users details in Table</h1>
      <Table striped bordered hover variant="dark">
        <thead>
            <th>S.no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email </th>
            <th>Phone number </th>
            <th>Address list </th>
        </thead>
        <tbody>
            {
                usersDetails.map((userDetail , i) => 
                    <tr>
                        <td> {i+1} </td>
                        <td> { userDetail.name } </td>
                        <td> { userDetail.lastName } </td>
                        <td> { userDetail.email } </td>
                        <td> { userDetail.phoneNumber } </td>
                        <td>
                        <Table striped bordered hover variant="dark">
                            <tbody>
                            {
                                userDetail.Addresses.map((address,i) => 
                                    <tr>
                                        <td> { Math.floor(Math.random(i) * 54 )  } </td>
                                        <td> { address.houseNumber } </td>
                                        <td> { address.area } </td>
                                        <td> { address.pincode } </td>
                                        <td> { address.country } </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </Table>
                            
                        </td>
                    </tr>
                )
            }
        </tbody>
      </Table>
    </div>
  )
}
