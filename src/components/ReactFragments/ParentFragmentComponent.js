import React from 'react'
import Table from 'react-bootstrap/Table';
import ChildFragmentComponent from './ChildFragmentComponent';

export default function ParentFragmentComponent() {
  return (
    <div>
      <Table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <ChildFragmentComponent />
        </tbody>
      </Table>
    </div>
  )
}
