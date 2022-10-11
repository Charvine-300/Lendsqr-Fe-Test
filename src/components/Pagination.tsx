import React, { useContext, useState } from 'react'
import '../assets/styles/dashboard.scss'
import { PageNumberContext } from '../App'
import Previous from '../assets/images/previous.png'
import Next from '../assets/images/next.png'



function Pagination() {
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const pageNumber = useContext(PageNumberContext);

  //Initializing list of numbers for pagination
  let pages = [];

  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }

  //Functions for previous/next arrow feature
  const nextPage = ()  => {
    if (currentPageNumber < 10) {
      setCurrentPageNumber(currentPageNumber + 1);
      pageNumber(currentPageNumber);
    }
  }

  const previousPage = () => {
    if (currentPageNumber > 1) {
      setCurrentPageNumber(currentPageNumber - 1);
      pageNumber(currentPageNumber);
    }
  }

  return (
    <div id='bottom-details'>
      <div id="total-wrapper">
        <p> Showing 10 of 100 </p>
      </div>
      <div id='pagination-wrapper'>
        <div className="arrow-buttons" onClick={previousPage}>
          <img 
            src={Previous} 
            alt="Previous Page button" 
            style={{'opacity': `${currentPageNumber === 1 ? '0.6' : '1'}`}}
          />
        </div>
        <div>
          {pages.map((page, index )=> (
            <button 
              key={index} 
              onClick={() => {
                pageNumber(page)
                setCurrentPageNumber(page)
              }}
              style={{'opacity': `${page === currentPageNumber ? '1' : '0.6'}`}}
            > {page} </button>
          ))}
        </div>
        <div className="arrow-buttons" onClick={nextPage}>
          <img 
            src={Next} 
            alt="Next Page button" 
            style={{'opacity': `${currentPageNumber === 10 ? '0.6' : '1'}`}}
          />
        </div>
      </div>
    </div>
  )
}

export default Pagination