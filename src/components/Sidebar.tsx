import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/sidebar.scss'
import Logo from '../assets/images/logo.svg'
import Briefcase from '../assets/images/menu_icons/briefcase.svg'
import Home from '../assets/images/menu_icons/home.svg'
import Arrow from '../assets/images/menu_icons/sidebar_arrow.svg'
import { 
  customerMenu,
  businessMenu,
  settingMenu 
} from '../utils/constants'


type Props = {
  display: string;
}


const Sidebar = ({ display }: Props) => {
  //Stateful variable for active options
  const [activeOption, setActiveOption] = useState('dashboard');


  return (
    <Fragment>
      <div className={`sidebar-wrapper ${display}`} title='sidebar'>
        <div className="menu">
          <div id="mobile-logo">
            <img src={Logo} alt="Lendsqr logo" className='mobile' />
          </div>

          <div id="sidebar">
            <div className="menu-item-flex" style={{'marginBottom': '20px'}}>
              <img src={Briefcase} alt="Switch Organisation" />
              <p title='paragraph'> switch organisation </p>
              <img src={Arrow} alt="Arrow icon" id='arrow' />
            </div>
            <Link to='/dashboard'>
              <div onClick={() => setActiveOption('dashboard')} id={activeOption === 'dashboard' ? 'active' : ''} className="menu-item-flex" style={{'marginBottom': '20px'}}>
                <img src={Home} alt="Dashboard" />
                <p title='paragraph' className='blur-color'> dashboard </p>
              </div>
            </Link>

            {/* Customers Menu items */}
            <div className="menu-list">
              <p title='paragraph' className="menu-title"> customers </p>
            </div>
            <div>
              {customerMenu.map(item => (
                <Link to={`/${item.name.split(" ").join("_")}`} key={item.id}>
                  <div className="menu-item-flex" onClick={() => setActiveOption(item.name)} id={activeOption === item.name ? 'active' : ''}>
                    <img src={item.icon} alt={item.name} />
                    <p title='paragraph' className='blur-color'> {item.name} </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Businesses Menu items */}
            <div className="menu-list">
              <p className="menu-title"> businesses </p>
            </div>
            <div>
              {businessMenu.map(item => (
                <Link to={`/${item.name.split(" ").join("_")}`} key={item.id}>
                  <div className="menu-item-flex" onClick={() => setActiveOption(item.name)} id={activeOption === item.name ? 'active' : ''}>
                    <img src={item.icon} alt={item.name} />
                    <p className='blur-color'> {item.name} </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Settings Menu items */}
            <div className="menu-list">
              <p className="menu-title"> settings </p>
            </div>
            <div>
              {settingMenu.map(item => (
                <Link to={
                  item.name === 'logout' ?
                  `/` :
                  `/${item.name.split(" ").join("_")}`} key={item.id}
                >
                  <div className="menu-item-flex" onClick={() => setActiveOption(item.name)} id={activeOption === item.name ? 'active' : ''}>
                    <img src={item.icon} alt={item.name} />
                    <p className='blur-color'> {item.name} </p>
                  </div>
                </Link>
              ))}
            </div>

            {/*Version Number */}
            <p className="version-number"> v1.2.0 </p>

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Sidebar
