import { useContext } from 'react'
import '../../assets/styles/dashboard.scss'
import { Pagination } from "@mui/material";
import { 
  PageNumberContext, 
  SetPageNumberContext, 
  UserDataContext,
  PerPageContext,
  SetPerPageContext 
} from '../../utils/contexts'


const UserDataPagination = () => {
  const pageNumber = useContext(PageNumberContext);
  const setPageNumber = useContext(SetPageNumberContext);
  const userData = useContext(UserDataContext);
  const perPage = useContext(PerPageContext);
  const setPerPage = useContext(SetPerPageContext);

  //Calculating the number of pages
  const totalPages = Math.ceil(userData.length / perPage);

  //Initializing list of numbers for pagination
  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  //Function for onChange pagination number
  const nextPage = (event: any)  => {
    //Function if page number button is pushed
    if (event.target.ariaLabel) {
      let number = parseInt(event.target.ariaLabel.split(' ')[3])
      console.log(number);
      setPageNumber(number);
    }

    //Function if Previous.next buttons are pushed
    else if (!event.target.ariaLabel) {
      let eventTag = event.srcElement.attributes[4].nodeValue;
      if (eventTag === "NavigateNextIcon" && pageNumber < totalPages) {
        setPageNumber(pageNumber + 1);
      }

      else if (eventTag === "NavigateBeforeIcon" && pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    }
  }

  //Function to display first page users when number of users per page changes
  const showFirstPage = (e: any) => {
    setPerPage(e.target.value)
    setPageNumber(1);
    console.log(pageNumber)
  }


  return (  

    <>
      <div id="bottom-details">
        <div id="total-wrapper">
          <p>
            Showing 
            <select name="digits" id="digits" onChange={(e) => showFirstPage(e)}>
              <option value="10"> 10 </option>
              <option value="20"> 20 </option>
              <option value="25"> 25 </option>
            </select>
            of {userData.length}
          </p>
        </div>
        <div id="pagination-wrapper">
        <Pagination 
          count={totalPages}
          onChange={() => nextPage(event)}
        />
        </div>
      </div>
    
    </>
  );
}
 
export default UserDataPagination;