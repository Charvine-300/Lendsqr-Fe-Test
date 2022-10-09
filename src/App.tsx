import { Fragment } from "react"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to='/login' />} />
          <Route path="/login" element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>

      </Router>
    </Fragment>
  )
}

export default App
