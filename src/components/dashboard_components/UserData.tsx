import { useContext } from 'react'
import '../../assets/styles/dashboard.scss'
import TableHeader from './TableHeader'
import UserOptions from './UserOptions'
import { CurrentUsersContext, IsError, IsLoading } from '../../utils/contexts'



type Props = {}

function UserData({}: Props) {
  //list of all users drilled from App.tsx
  const userData = useContext(CurrentUsersContext);
  const loading = useContext(IsLoading);
  const error = useContext(IsError);


  return (
    <div id='table-wrapper'>
      {loading && <div className='loading-error-message'> <p> Loading Users..</p> </div>}
      {error && <div className='loading-error-message'> <p> Error Loading Users </p> </div>}
      
      {/* Table of Users */}
      {!loading && <table className='users-table'>
        <thead>
          <TableHeader />
        </thead>
       <tbody>
          {userData?.map(user => {
            return (
              <tr key={parseInt(user.id)} >
                <td> {user.orgName} </td>
                <td> {user.userName} </td>
                <td style={{'textTransform': 'none'}}> {user.email} </td>
                <td> {user.phoneNumber} </td>
                <td> {user.createdAt} </td>
                <UserOptions ID={user.id} User={user} />
              </tr>
            )
          })}
        </tbody>
      </table>}
    </div>
  )
}

export default UserData