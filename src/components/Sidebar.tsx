import React, { Fragment } from 'react'
import '../assets/styles/sidebar.scss'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import Close from '../assets/images/close.png'
import Briefcase from '../assets/images/menu_icons/briefcase.png'
import Home from '../assets/images/menu_icons/home.png'
import Arrow from '../assets/images/menu_icons/sidebar_arrow.png'
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
            <div className="menu-item-flex" style={{'marginBottom': '20px'}}>
              <img src={Home} alt="Dashboard" />
              <p className='blur-color'> dashboard </p>
            </div>

            {/* Customers Menu items */}
            <div className="menu-list">
              <p className="menu-title"> customers </p>
            </div>
            <div>
              {customerMenu.map(item => (
                <div className="menu-item-flex" key={item.id}>
                  <img src={item.icon} alt={item.name} />
                  <p className='blur-color'> {item.name} </p>
                </div>
              ))}
            </div>

            {/* Businesses Menu items */}
            <div className="menu-list">
              <p className="menu-title"> businesses </p>
            </div>
            <div>
              {businessMenu.map(item => (
                <div className="menu-item-flex" key={item.id}>
                  <img src={item.icon} alt={item.name} />
                  <p className='blur-color'> {item.name} </p>
                </div>
              ))}
            </div>

            {/* Settings Menu items */}
            <div className="menu-list">
              <p className="menu-title"> settings </p>
            </div>
            <div>
              {settingMenu.map(item => (
                <div 
                  key={item.id}
                  className="menu-item-flex" 
                  onClick={() => {
                    if (item.name === 'logout') {
                      navigate('/login');
                    }
                  }}
                >
                  <img src={item.icon} alt={item.name} />
                  <p className='blur-color'> {item.name} </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Sidebar