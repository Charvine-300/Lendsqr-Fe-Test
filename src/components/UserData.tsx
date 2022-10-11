import React from 'react'
import '../assets/styles/dashboard.scss'
import Filter from '../assets/images/filter.png'
import Options from '../assets/images/options.png'
import { userTableHeads } from '../../constants'

type Props = {}

function UserData({}: Props) {
  return (
    <div id='table-wrapper'>
      {/* Table of Users */}
      <table className='users-table'>
        <thead>
          <tr>
            {userTableHeads.map(head => (
              <th key={head.id}> 
                {head.title}
                <img src={Filter} alt={`${head.id} Filter`} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 1 </td>
            <td> Experience Accra </td>
            <td> 08 Sept 2022 </td>
            <td> Kweku Acquaye </td>
            <td> Kweku Acquaye </td>
            <td> Kweku Acquaye </td>
            <td> 
              <img src={Options} alt="Options icon" />
            </td>
          </tr>
        </tbody>
      
      </table>
    </div>
  )
}

export default UserData