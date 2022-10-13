import { Fragment, useState, useEffect, createContext } from "react"
import Login from "./components/Login"
import Homepage from "./components/Dashboard"
import ScrollToTop from "./components/ScrollToTop"
import { UserDataProps } from "../interfaces"
import { Post } from "./api/api"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"


//Initializing context API for user data
export const CurrentUsersContext = createContext<UserDataProps[] | null>(null);
export const UserDataContext = createContext<UserDataProps[] | any>(null);
export const SetUserDataContext = createContext<any | null>(null);
export const PageNumberContext = createContext<number | any>(null);
export const SetPageNumberContext = createContext<any | null>(null);
export const PerPageContext = createContext<number | any>(null);
export const SetPerPageContext = createContext<any | null>(null);


function App() {
    //Creating an array of status types to pick at random for each user
    const statusTypes = ['active', 'inactive', 'pending', 'blacklisted'];

  const [userData, setUserData] = useState<UserDataProps[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  //Stateful variable for creating pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage, setUsersPerPage] = useState<number>(10);

  useEffect(() => {
    //Making request to API to get user data
    Post.getPosts()
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        const random = Math.floor(Math.random() * statusTypes.length);
        data[i].status = statusTypes[random];
      }
      setUserData(data)
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
      <CurrentUsersContext.Provider value={currentUsers}>
        <UserDataContext.Provider value={userData}>
          <SetUserDataContext.Provider value={setUserData}>
            <SetPageNumberContext.Provider value={setCurrentPage}>
              <PageNumberContext.Provider value={currentPage}>
                <PerPageContext.Provider value={usersPerPage}>
                  <SetPerPageContext.Provider value={setUsersPerPage}>
                    <Router>
                      <ScrollToTop />
                      <Routes>
                        <Route path="/" element={<Navigate to='/login' />} />
                        <Route path="/login" element={<Login />} />
                        <Route path='/dashboard/*' element={<Homepage />} />
                      </Routes>
                    </Router>
                  </SetPerPageContext.Provider>
                </PerPageContext.Provider>
              </PageNumberContext.Provider>
            </SetPageNumberContext.Provider>
          </SetUserDataContext.Provider>
        </UserDataContext.Provider>
      </CurrentUsersContext.Provider>
    </Fragment>
  )
}

export default App
