import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Users from './dashboard_components/Users'
import UserDetails from './UserDetails'
import ScrollToTop from './ScrollToTop'
import { Routes, Route } from 'react-router-dom'
import '../assets/styles/dashboard.scss'



function Homepage() {
  //Stateful variable for sidebar toggle in mobile view
  const [sidebarToggle, setSidebarToggle] = useState('desktop');

  return (
    <div className="dashboard-wrapper">
      <ScrollToTop />
      <Header sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      <Sidebar display={sidebarToggle} />
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='users/:id' element={<UserDetails />} />
      </Routes>
    </div>
  )
}

export default Homepage