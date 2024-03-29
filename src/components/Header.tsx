import React, { Fragment, useState } from 'react'
import '../assets/styles/header.scss'
import Menu from '../assets/images/menu.svg'
import Close from '../assets/images/close.svg'
import Search from '../assets/images/search.svg'
import Logo from '../assets/images/logo.svg'
import Bell from '../assets/images/bell.svg'
import Avatar from '../assets/images/avatar.svg'
import Arrow from '../assets/images/arrow.svg'
import MobileSearch from '../assets/images/mobile_search.svg'


interface Props {
  sidebarToggle: string;
  setSidebarToggle: (toggle: string) => void;
}

function Header({ sidebarToggle, setSidebarToggle }: Props) {
  //Stateful variable for search bar toggle in mobile view
  const [searchToggle, setSearchToggle] = useState<string>('desktop');
  const [menuAltText, setMenuAltText] = useState<string>('menu');

  const searchBarToggle = () => {
    if (searchToggle === 'desktop') {
      setSearchToggle('mobile');
    }

    else {
      setSearchToggle('desktop');
    }
  }


  const SidebarToggle = () => {
    if (sidebarToggle === 'desktop') {
      setSidebarToggle('mobile');
      setMenuAltText('close')
    }

    else {
      setSidebarToggle('desktop');
      setMenuAltText('menu')
    }
  }


  


  return (
    <Fragment>
      <header>
        <div className="header-items">
          <span id='desktop-header-logo' className='desktop'>
            <img src={Logo} alt="Company Logo" className='header-logo' />
          </span>
          <img 
            src={sidebarToggle === 'desktop' ? Menu : Close} 
            alt={menuAltText}
            className='mobile' 
            onClick={SidebarToggle}
          />

          {/* Search bar for desktop view */}
          <div className='desktop search-bar'>
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
        <div id='mobile-search-bar' className={`mobile-search-wrapper ${searchToggle}`}>
          <div className='search-mobile search-bar'>
            <span>
              <img src={Search} alt="Search for anything" />
            </span>
            <input type="text" placeholder='Search for anything' />
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header