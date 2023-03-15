import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export default function ReusableComp2(props) {
    const handleClick = () => {
        alert(props.data.email);
      };
  return (
    <div>
      <Table>
        <td width={'20%'}>{ props.data.name }</td>
        <td width={'50%'}>{ props.data.email }</td>
        <td width={'30%'}> <Button variant="success" onClick={handleClick}>Get Email</Button> </td>
      </Table>
    </div>
  )
}
