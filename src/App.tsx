import { Fragment } from "react"
import Login from "./components/Login"
import Homepage from "./components/Homepage"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to='/login' />} />
          <Route path="/login" element={<Login />} />
          <Route path='/dashboard/*' element={<Homepage />} />
        </Routes>

      </Router>
    </Fragment>
  )
}

export default App
