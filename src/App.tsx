import { Fragment } from "react"
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>

      </Router>
    </Fragment>
  )
}

export default App
