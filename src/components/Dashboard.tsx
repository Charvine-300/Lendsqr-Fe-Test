import Header from './Header'
import Users from './dashboard_components/Users'
import UserDetails from './UserDetails'
import ScrollToTop from './ScrollToTop'
import { Routes, Route } from 'react-router-dom'
import '../assets/styles/dashboard.scss'



function Homepage() {
  return (
    <div className="dashboard-wrapper">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='users/:id' element={<UserDetails />} />
      </Routes>
    </div>
  )
}

export default Homepage