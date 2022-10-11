import { Fragment, useState, useEffect } from "react"
import axios from "axios"
import Login from "./components/Login"
import Homepage from "./components/Homepage"
import { UserDataProps } from "../interfaces"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"


//Function to fetch user data from API
async function fetchUserData(): Promise<UserDataProps[]> {
  const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";
  const response = await axios.get<UserDataProps[]>(url);
  return response.data;
}

function App() {
  const [userData, setUserData] = useState<UserDataProps[]>([]);

  useEffect(() => {
    (async () => {
      const userdata = await fetchUserData();
      setUserData(userdata);
      console.log(userData);
    })()
  }, []);
  

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
