import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/sidebar.scss'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import Close from '../assets/images/close.png'
import Briefcase from '../assets/images/menu_icons/briefcase.svg'
import Home from '../assets/images/menu_icons/home.svg'
import Arrow from '../assets/images/menu_icons/sidebar_arrow.svg'
import { 
  customerMenu,
  businessMenu,
  settingMenu 
} from '../constants'


type Props = {
  display: string;
}


function Sidebar({ display }: Props) {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className={`sidebar-wrapper ${display}`}>
        <div className="menu">
          <div id="mobile-logo">
            <img src={Logo} alt="Lendsqr logo" className='mobile' />
          </div>

          <div id="sidebar">
            <div className="menu-item-flex" style={{'marginBottom': '20px'}}>
              <img src={Briefcase} alt="Switch Organisation" />
              <p> switch organisation </p>
              <img src={Arrow} alt="Arrow icon" id='arrow' />
            </div>
            <Link to='/dashboard'>
              <div className="menu-item-flex" style={{'marginBottom': '20px'}}>
                <img src={Home} alt="Dashboard" />
                <p className='blur-color'> dashboard </p>
              </div>
            </Link>

            {/* Customers Menu items */}
            <div className="menu-list">
              <p className="menu-title"> customers </p>
            </div>
            <div>
              {customerMenu.map(item => (
                <Link to={`/${item.name.split(" ").join("_")}`} key={item.id}>
                  <div className="menu-item-flex">
                    <img src={item.icon} alt={item.name} />
                    <p className='blur-color'> {item.name} </p>
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
                  <div className="menu-item-flex">
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
                  <div className="menu-item-flex">
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