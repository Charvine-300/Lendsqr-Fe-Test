import Header from './Header'
import Users from './Users'
import '../assets/styles/dashboard.scss'



function Homepage() {
  return (
    <div className="dashboard-wrapper">
      <Header />
      <Users />
    </div>
  )
}

export default Homepage