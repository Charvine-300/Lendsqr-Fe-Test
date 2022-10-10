import Header from './Header'
import '../assets/styles/dashboard.scss'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'



function Homepage() {
  return (
    <div className="dashboard-wrapper">
      <Header />
      
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default Homepage