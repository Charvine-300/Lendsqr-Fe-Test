import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/styles/dashboard.scss'
import Filter from '../assets/images/filter.png'
import Options from '../assets/images/options.png'
import { userTableHeads } from '../constants'
import { UserDataContext } from '../App'
import ViewDetails from '../assets/images/view.png'
import BlacklistUser from '../assets/images/blacklist.png'
import ActivateUser from '../assets/images/activate.png'



type Props = {}

function UserData({}: Props) {
  const navigate = useNavigate();

  //list of all users drilled from App.tsx
  const userData = useContext(UserDataContext);

  //Stateful variables to toggle user options
  const [optionsToggle, setOptionsToggle] = useState<boolean>(false);
  const [userID, setUserID] = useState<number>(0);
  
  //Stateful variable to trigger re-render with blacklist.activate user feature
  const [optionSelect, setOptionSelect] = useState<number>(1);

  const UserOptionsToggle = (id: number) => {
    setUserID(id);

    if (optionsToggle === false) {
      setOptionsToggle(true);
    }

    else {
      setOptionsToggle(false);
    }
  }

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
          {userData?.map(user => {
            return (
              <tr key={parseInt(user.id)}>
                <td> {user.orgName} </td>
                <td> {user.userName} </td>
                <td> {user.email} </td>
                <td> {user.phoneNumber} </td>
                <td> {user.createdAt} </td>
                <td>
                  <span className={user.status}> {user.status} </span>
                </td>
                <td> 
                  <img src={Options} alt="Options icon" onClick={() => UserOptionsToggle(parseInt(user.id))} />
                  <div 
                    className='user-options' 
                    style={{'display': `${userID === parseInt(user.id) && optionsToggle === true ? 'block' : 'none'}`}}
                  >
                    <ul>
                      <li
                        onClick={() => {
                          localStorage.setItem('userDetails', JSON.stringify(user));
                          navigate(`/users/${user.id}`)
                        }}
                      >
                        <img src={ViewDetails} alt="view details icon" />
                        view details
                      </li>
                      <li 
                        onClick={() => {
                          user['status'] = 'blacklisted'
                          setOptionSelect(optionSelect + 1)
                        }}
                      >
                        <img src={BlacklistUser} alt="blacklist user icon" />
                        blacklist user
                      </li>
                      <li 
                        onClick={() => {
                          user['status'] = 'active'
                          setOptionSelect(optionSelect + 1)
                        }}
                      >
                        <img src={ActivateUser} alt="activate user icon" />
                        activate user
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserData