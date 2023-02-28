import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Post } from '../../api/api'
import '../../assets/styles/dashboard.scss'
import FilterImg from '../../assets/images/filter.svg'
import Options from '../../assets/images/options.svg'
import { userTableHeads } from '../../constants'
import Filter from './Filter'
import ViewDetails from '../../assets/images/view.svg'
import BlacklistUser from '../../assets/images/blacklist.svg'
import ActivateUser from '../../assets/images/activate.svg'
import { 
  CurrentUsersContext, 
  IsError, 
  IsLoading, 
  FilterToggle, 
  FilterFormToggleFunc, 
  SetFilterToggle,
  OptionsToggle,
  SetOptionsToggle,
  UserID,
  SetUserID,
  UserOptionsToggleFunc 
} from '../../App'



type Props = {}

function UserData({}: Props) {
  const navigate = useNavigate();

  //list of all users drilled from App.tsx
  const userData = useContext(CurrentUsersContext);
  const loading = useContext(IsLoading);
  const error = useContext(IsError);

  //Filter Component Toggle 
  const filterToggle = useContext(FilterToggle);
  const filterFormToggle = useContext(FilterFormToggleFunc);
  const setFilterToggle = useContext(SetFilterToggle);

  //User Options Toggle
  const optionsToggle = useContext(OptionsToggle);
  const setOptionsToggle = useContext(SetOptionsToggle);
  const userID = useContext(UserID);
  const setUserID = useContext(SetUserID);
  const UserOptionsToggle = useContext(UserOptionsToggleFunc);



  //Function to fetch user and navigate to user details page
  const ViewUserDetails = (id: number, status: any) => {
    Post.getAPost(id)
    .then(data => {
      data['status'] = status;
      console.log(data);
      localStorage.setItem('userDetails', JSON.stringify(data));
      navigate(`users/${id}`)
    })
    .catch(err => {
      console.log(err)
    })
    return () => {};
  }

  return (
    <div id='table-wrapper'>
      <Filter filterToggle={filterToggle} setFilterToggle={setFilterToggle} />
      {loading && <div className='loading-error-message'> <p> Loading Users..</p> </div>}
      {error && <div className='loading-error-message'> <p> Error Loading Users </p> </div>}
      
      {/* Table of Users */}
      {!loading && <table className='users-table'>
        <thead>
          <tr>
            {userTableHeads.map(head => (
              <th key={head.id}> 
                {head.title}
                <img src={FilterImg} alt={`${head.title} Filter`} onClick={filterFormToggle} />
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
                <td style={{'textTransform': 'none'}}> {user.email} </td>
                <td> {user.phoneNumber} </td>
                <td> {user.createdAt} </td>
                <td>
                  <span className={user.status}> {user.status} </span>
                </td>
                <td> 
                  <img src={Options} alt="Options icon" style={{'cursor': 'pointer'}} onClick={() => UserOptionsToggle(parseInt(user.id))} />
                  <div 
                    className='user-options' 
                    style={{'display': `${userID === parseInt(user.id) && optionsToggle === true ? 'block' : 'none'}`}}
                  >
                    <ul>
                      <li onClick={() => {ViewUserDetails(parseInt(user.id), user.status)}}>
                        <img src={ViewDetails} alt="view details icon" />
                        view details
                      </li>
                      <li 
                        onClick={() => {
                          user['status'] = 'blacklisted'
                          setOptionsToggle(false)
                        }}
                      >
                        <img src={BlacklistUser} alt="blacklist user icon" />
                        blacklist user
                      </li>
                      <li 
                        onClick={() => {
                          user['status'] = 'active'
                          setOptionsToggle(false)
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
      </table>}
    </div>
  )
}

export default UserData