import Header from './Header'
import '../assets/styles/dashboard.scss'
import { Routes, Route } from 'react-router-dom'
import Users from './Users'



function Homepage() {
  return (
    <div className="dashboard-wrapper">
      <Header />
      
      <Routes>
        <Route path='users' element={<Users />} />
      </Routes>
    </div>
  )
}

export default Homepage