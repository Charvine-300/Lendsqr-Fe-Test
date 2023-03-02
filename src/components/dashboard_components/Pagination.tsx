import { useContext } from 'react'
import '../../assets/styles/dashboard.scss'
import Previous from '../../assets/images/previous.svg'
import Next from '../../assets/images/next.svg'
import { 
  PageNumberContext, 
  SetPageNumberContext, 
  UserDataContext,
  PerPageContext,
  SetPerPageContext 
} from '../../App'



function Pagination() {
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

  //Functions for previous/next arrow feature
  const nextPage = ()  => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  return (
    <div id='bottom-details'>
      <div id="total-wrapper">
        <p>
          Showing 
          <select name="digits" id="digits" onChange={(e) => setPerPage(e.target.value)}>
            <option value="10"> 10 </option>
            <option value="20"> 20 </option>
            <option value="25"> 25 </option>
          </select>
          of {userData.length}
        </p>
      </div>
      <div id='pagination-wrapper'>
        <div className="arrow-buttons" onClick={previousPage}>
          <img 
            src={Previous} 
            alt="Previous Page button" 
            style={{'opacity': `${pageNumber === 1 ? '0.6' : '1'}`}}
          />
        </div>
        <div>
          {pages.map((page, index )=> (
            <button 
              key={index} 
              onClick={() => {
                setPageNumber(page)
              }}
              style={{'opacity': `${page === pageNumber ? '1' : '0.6'}`}}
            > {page} </button>
          ))}
        </div>
        <div className="arrow-buttons" onClick={nextPage}>
          <img 
            src={Next} 
            alt="Next Page button" 
            style={{'opacity': `${pageNumber === 10 ? '0.6' : '1'}`}}
          />
        </div>
      </div>
    </div>
  )
}

export default Pagination