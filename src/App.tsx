import { Fragment, useState, useEffect, createContext } from "react"
import Login from "./components/Login"
import Homepage from "./components/Homepage"
import UserDetails from "./components/UserDetails"
import { UserDataProps } from "../interfaces"
import { Post } from "./api/api"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"


//Initializing context API for user data
export const UserDataContext = createContext<UserDataProps[] | null>(null);
export const PageNumberContext = createContext<any | null>(null);


function App() {
    //Creating an array of status types to pick at random for each user
    const statusTypes = ['active', 'inactive', 'pending', 'blacklisted'];

  const [userData, setUserData] = useState<UserDataProps[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  //Stateful variable for creating pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage] = useState<number>(10);

  useEffect(() => {
    //Making request to API to get user data
    Post.getPosts()
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        const random = Math.floor(Math.random() * statusTypes.length);
        data[i].status = statusTypes[random];
      }
      setUserData(data)

      console.log(userData)
    })
    .catch((err) => {
      setIsError(true);
      console.log(err)
    });
    return () => {};
  }, []);

  //Varables for slicing through user data
  const lastPostIndex = currentPage * usersPerPage;
  const firstPostIndex = lastPostIndex - usersPerPage;

  //Slicing through user data
  const currentUsers = userData.slice(firstPostIndex, lastPostIndex);
  

  return (
    <Fragment>
      <UserDataContext.Provider value={currentUsers}>
        <PageNumberContext.Provider value={setCurrentPage}>
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to='/login' />} />
              <Route path="/login" element={<Login />} />
              <Route path='/dashboard/*' element={<Homepage />} />
              <Route path='/users/:id' element={<UserDetails />} />
            </Routes>
          </Router>
        </PageNumberContext.Provider>
      </UserDataContext.Provider>
    </Fragment>
  )
}

export default App
