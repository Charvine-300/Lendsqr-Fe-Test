import React from 'react'
import { useParams } from 'react-router-dom'


type Props = {}

function UserDetails({}: Props) {
  const { id } = useParams()

  //Retrieving data from localStorage
 const userDetails = JSON.parse(localStorage.getItem('userDetails') || '');

  return (
    <>
      <h1 style={{'fontSize': '20px'}}> UserDetails - {userDetails.email} </h1>
    
    </>
  )
}

export default UserDetails