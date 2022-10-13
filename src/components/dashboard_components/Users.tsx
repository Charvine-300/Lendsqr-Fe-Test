import '../../assets/styles/dashboard.scss'
import { userFeatures } from '../../constants'
import UserData from './UserData'
import Pagination from './Pagination'


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
      <Pagination />
    </div>
  )
}

export default Users