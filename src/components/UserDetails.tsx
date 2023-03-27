import '../assets/styles/userdetails.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { UserDataProps } from '../utils/interfaces'
import { userMenuItems } from '../utils/constants'
import StarOn from '../assets/images/star_on.svg'
import StarOff from '../assets/images/star_off.svg'
import DashboardArrow from '../assets/images/back_to_users.svg'


type Props = {}

function UserDetails({}: Props) {
  const { id = '' } = useParams()
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState<UserDataProps>();
  const[menuSelected, setMenuSelected] = useState(1);

  //Stateful variable to trigger re-render
  const [trigger, setTrigger] = useState<number>(1);


  useEffect(() => {
    //Retrieving user details from localStorage
    let user = JSON.parse(localStorage.getItem('userData')!);
    setUserDetails(user[parseInt(id) - 1]);
  }, []);


  return (
    <>
      <div className='dashboard-details'>
        <div className="flex-wrapper" onClick={() => navigate('/dashboard')}>
          <img src={DashboardArrow} alt="Back to Users Page" />
          <p> Back to Users </p>
        </div>
        <div className="user-details-wrapper">
          <h2> user details </h2>
          <div className='blacklist-activate'>
            <button onClick={() => 
              {
                if (userDetails != undefined) {
                  userDetails.status = 'blacklisted'
                }
                setTrigger(trigger + 1)
              }}
            > 
              blacklist user 
            </button>
            <button onClick={() => 
              {
                if (userDetails != undefined) {
                  userDetails.status = 'active'
                }
                setTrigger(trigger + 1)
              }}
            > 
              activate user 
            </button>
          </div>
        </div>

        {/* User Details */}
        <div className="user-details">
          <div className="user-info">
            <div className="box">
              <img src={userDetails?.profile.avatar} alt="User Profile Avatar" />
              <div>
                <h3> {`${userDetails?.profile.firstName} ${userDetails?.profile.lastName}`} </h3>
                <p> {userDetails?.accountNumber} </p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="box">
              <p> User's Tier </p>
              <div>
                <img src={StarOn} alt="Ticked star" />
                <img src={StarOff} alt="Unticked star" />
                <img src={StarOff} alt="Unticked star" />
              </div>
            </div>
            <div className="divider"></div>
            <div className="box">
              <h3> ₦200,000.00 </h3>
              <p> {`${userDetails?.profile.bvn}/${userDetails?.orgName}`} </p>
            </div>
          </div>

          <div className="menu-wrapper">
              {userMenuItems.map(item => (
                <div className="menu-item" key={item.id} style={{'borderBottom': menuSelected === item.id ? '3px solid #39CDCC' : 'none'}}>
                  <p 
                    onClick={() => setMenuSelected(item.id)}
                    style={{'color': menuSelected === item.id ? '#39CDCC' : '	#000000',}}
                  > 
                    {item.menuItem} 
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* General Details */}
        <div className="user-details" style={{'paddingBottom': '40px'}}>
          <div className="general-details-wrapper">
            <div className="details">
              <h5> Personal Information </h5>
              <div className='info-section'>
                <div>
                  <p> full name </p>
                  <h6> {`${userDetails?.profile.firstName} ${userDetails?.profile.lastName}`} </h6>
                </div>
                <div>
                  <p> phone number </p>
                  <h6> {userDetails?.profile.phoneNumber} </h6>
                </div>
                <div>
                  <p> email address </p>
                  <h6> {userDetails?.email} </h6>
                </div>
                <div>
                  <p> bvn </p>
                  <h6> {userDetails?.profile.bvn} </h6>
                </div>
                <div>
                  <p> gender </p>
                  <h6> {userDetails?.profile.gender} </h6>
                </div>
                <div>
                  <p> address </p>
                  <h6> {userDetails?.profile.address} </h6>
                </div>
              </div>
            </div>
            <div className="details">
              <h5> Education and Employment </h5>
              <div className='info-section'>
                <div>
                  <p> level of education </p>
                  <h6> {userDetails?.education.level} </h6>
                </div>
                <div>
                  <p> employment status </p>
                  <h6> {userDetails?.education.employmentStatus} </h6>
                </div>
                <div>
                  <p> sector of employment </p>
                  <h6> {userDetails?.education.sector} </h6>
                </div>
                <div>
                  <p> duration of employment </p>
                  <h6> {userDetails?.education.duration} </h6>
                </div>
                <div>
                  <p> office email </p>
                  <h6> {userDetails?.education.officeEmail} </h6>
                </div>
                <div>
                  <p> monthly income </p>
                  <h6> {`$${userDetails?.education.monthlyIncome[0]} - $${userDetails?.education.monthlyIncome[1]}`} </h6>
                </div>
                <div>
                  <p> loan repayment </p>
                  <h6> {`$${userDetails?.education.loanRepayment}`} </h6>
                </div>
              </div>
            </div>
            <div className="details">
              <h5> Socials </h5>
              <div className="info-section">
                <div>
                  <p> twitter </p>
                  <h6> {userDetails?.socials.twitter} </h6>
                </div>
                <div>
                  <p> facebook </p>
                  <h6> {userDetails?.socials.facebook} </h6>
                </div>
                <div>
                  <p> instagram </p>
                  <h6> {userDetails?.socials.instagram} </h6>
                </div>
              </div>
            </div>
            <div className="details">
              <h5> Guarantor </h5>
              <div className="info-section">
                <div>
                  <p> full name </p>
                  <h6> {`${userDetails?.guarantor.firstName} ${userDetails?.guarantor.lastName}`} </h6>
                </div>
                <div>
                  <p> phone number </p>
                  <h6> {userDetails?.guarantor.phoneNumber} </h6>
                </div>
                <div>
                  <p> email address </p>
                  <h6> {userDetails?.email} </h6>
                </div>
                <div>
                  <p> address </p>
                  <h6> {userDetails?.guarantor.address} </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetails