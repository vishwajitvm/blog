import React from 'react'
import Table from 'react-bootstrap/Table';


export default function ReusableComp2(props) {
  return (
    <div>
      <Table>
        <td width={'50%'}>{ props.data.name }</td>
        <td width={'50%'}>{ props.data.email }</td>
      </Table>
    </div>
  )
}
