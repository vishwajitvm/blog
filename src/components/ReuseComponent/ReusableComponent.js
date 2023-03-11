import React from 'react'
import Table from 'react-bootstrap/Table';
import ReusableComp2 from './ReusableComp2';

export default function ReusableComponent() {
    const users = [
        {
            name: "vishwajit",
            email: "vishwajit@gmail.com"
        },
        {
            name: "Shivani",
            email: "Shivani@gmail.com"
        },
        {
            name: "Nidhi",
            email: "Nidhi@gmail.com"
        }
    ]
  return (
    <div>
        <h2>Reusable Component</h2>
            {
                users.map ( (user) => 
                    <ReusableComp2 data={user} />
                )
            }
    </div>
  )
}
