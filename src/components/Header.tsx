import { Fragment, useState } from 'react'
import '../assets/styles/header.scss'
import Menu from '../assets/images/menu.png'
import Close from '../assets/images/close.png'
import Search from '../assets/images/search.png'
import Logo from '../assets/images/logo.png'
import Bell from '../assets/images/bell.png'
import Avatar from '../assets/images/avatar.png'
import Arrow from '../assets/images/arrow.png'
import MobileSearch from '../assets/images/mobile_search.png'


type Props = {
  sidebarToggle: string;
  setSidebarToggle: any;
}

function Header({ sidebarToggle, setSidebarToggle }: Props) {
  //Stateful variable for search bar toggle in mobile view
  const [searchToggle, setSearchToggle] = useState('none');

  //Stateful variable for sidebar toggle in mobile view
  //const [sidebarToggle, setSidebarToggle] = useState('desktop');
  const [menuImg, setMenuImg] = useState(Menu);

  const searchBarToggle = () => {
    if (searchToggle === 'none') {
      setSearchToggle('block');
    }

    else {
      setSearchToggle('none');
    }
  }


  const SidebarToggle = () => {
    if (sidebarToggle === 'desktop') {
      setSidebarToggle('mobile');
      setMenuImg(Close);
    }

    else {
      setSidebarToggle('desktop');
      setMenuImg(Menu);
    }
  }


  


  return (
    <Fragment>
      <header>
        <div className="header-items">
          <img src={Logo} alt="Comapny Logo" className='desktop' />
          <img 
            src={menuImg} 
            alt="Lendsqr logo" 
            id='hamburger' 
            className='mobile' 
            onClick={SidebarToggle}
          />

          {/* Search bar for desktop view */}
          <div id="search-bar" className='desktop'>
            <span>
              <img src={Search} alt="Search for anything" />
            </span>
            <input type="text" placeholder='Search for anything' />
          </div>

          <div className="user-items">
            <p className='docs desktop'> Docs </p>
            <img src={MobileSearch} alt="Search icon for mobile view" className='mobile' onClick={searchBarToggle} />
            <img src={Bell} alt="Notification Bell" className='desktop' />
            <div className="user-items" style={{'marginLeft': '30px'}}>
              <img src={Avatar} alt="User Avatar" />
              <p className='profile-name desktop'> Adedeji </p>
              <img src={Arrow} alt="Profile Arrow" className='desktop' />
            </div>
          </div>
        </div>

        {/* Search Bar for mobile view */}
        <div id="search-bar" className={`search-mobile`} style={{'display': `${searchToggle}`}}>
          <span>
            <img src={Search} alt="Search for anything" />
          </span>
          <input type="text" placeholder='Search for anything' />
        </div>
      </header>
    </Fragment>
  )
}

export default Header