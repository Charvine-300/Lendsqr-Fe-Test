import '../../assets/styles/dashboard.scss'
import { userFeatures } from '../../utils/constants'
import UserData from './UserData'
import UserDataPagination from './UserDataPagination'


function Users() {
  return (
    <div className='dashboard-details'>
      <h2> users </h2>
      <div className="users-features-flex">
        {userFeatures.map(feature => (
          <div className="feature" key={feature.id}>
            <div style={{'background': `${feature.bg}`}}>
              <img src={feature.icon} alt={feature.feature} />
            </div>
            <p> {feature.feature} </p>
            <h3> {feature.total} </h3>
          </div>
        ))}
      </div>

      {/* Table of Users */}
      <UserData />

      {/* Pagination */}
      <UserDataPagination />
    </div>
  )
}

export default Users