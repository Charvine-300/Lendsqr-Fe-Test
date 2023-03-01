import '../assets/styles/404.scss';
import { Link } from 'react-router-dom';
import ErrorPage from '../assets/images/not_found.svg'

const NotFound = () => {

  return (  
    <>
      <div className="not-found">
        <img src={ErrorPage} alt="Not Found Page Image" className='not-found-image' />
        <Link to='/dashboard' className='return-to-dashboard'>
          <button> Back to Dashboard </button>
        </Link>
      </div>
    
    </>
  );
}
 
export default NotFound;