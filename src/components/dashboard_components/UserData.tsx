import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Post } from '../../api/api'
import '../../assets/styles/dashboard.scss'
import FilterImg from '../../assets/images/filter.svg'
import Options from '../../assets/images/options.svg'
import { userTableHeads } from '../../constants'
import { CurrentUsersContext, IsError, IsLoading } from '../../App'
import Filter from './Filter'
import ViewDetails from '../../assets/images/view.svg'
import BlacklistUser from '../../assets/images/blacklist.svg'
import ActivateUser from '../../assets/images/activate.svg'



type Props = {}

function UserData({}: Props) {
  const navigate = useNavigate();

  //list of all users drilled from App.tsx
  const userData = useContext(CurrentUsersContext);
  const loading = useContext(IsLoading);
  const error = useContext(IsError);

  //Stateful variables to toggle user options
  const [optionsToggle, setOptionsToggle] = useState<boolean>(false);
  const [userID, setUserID] = useState<number>(0);

  //Stateful variable for filter form toggle
  const [filterToggle, setFilterToggle] = useState<string>('none');
  
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

  const FilterFormTOggle = () => {
    if (filterToggle === 'none') {
      setFilterToggle('block');
    }

    else {
      setFilterToggle('none');
    }
  }


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
                <img src={FilterImg} alt={`${head.title} Filter`} onClick={FilterFormTOggle} />
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
                  <img src={Options} alt="Options icon" onClick={() => UserOptionsToggle(parseInt(user.id))} />
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
                          setOptionSelect(optionSelect + 1)
                          setOptionsToggle(false)
                        }}
                      >
                        <img src={BlacklistUser} alt="blacklist user icon" />
                        blacklist user
                      </li>
                      <li 
                        onClick={() => {
                          user['status'] = 'active'
                          setOptionSelect(optionSelect + 1)
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