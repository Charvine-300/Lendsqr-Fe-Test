import React from 'react'
import '../assets/styles/dashboard.scss'
import Users from '../assets/images/users.png'


type Props = {}

function Dashboard({}: Props) {
  return (
    <div className='dashboard-details'>
      <h2> users </h2>
      <div className="users-features-flex">
        <div className="feature">
          <div>
            <img src={Users} alt="Users" />
          </div>
          <p> users </p>
          <h3> 2,453 </h3>
        </div>
        <div className="feature">
          <div>
            <img src={Users} alt="Users" />
          </div>
          <p> users </p>
          <h3> 2,453 </h3>
        </div>
        <div className="feature">
          <div>
            <img src={Users} alt="Users" />
          </div>
          <p> users </p>
          <h3> 2,453 </h3>
        </div>
        <div className="feature">
          <div>
            <img src={Users} alt="Users" />
          </div>
          <p> users </p>
          <h3> 2,453 </h3>
        </div>
      </div>
    </div>
  )
}

export default Dashboard