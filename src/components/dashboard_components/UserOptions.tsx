import { useNavigate } from 'react-router-dom'
import '../../assets/styles/dashboard.scss'
import { useState, useRef, useEffect } from 'react'
import Options from '../../assets/images/options.svg'
import ViewDetails from '../../assets/images/view.svg'
import BlacklistUser from '../../assets/images/blacklist.svg'
import ActivateUser from '../../assets/images/activate.svg'



type Props = {
  ID: string;
  User: any;
}

const UserOptions = ({ ID, User }: Props) => {
  const navigate = useNavigate();

  //Stateful variables to toggle user options
  const [optionsToggle, setOptionsToggle] = useState<boolean>(false);
  const [userID, setUserID] = useState<number>(0);

  const UserOptionsToggle = (id: number) => {
    setUserID(id);

    if (optionsToggle === false) {
      setOptionsToggle(true);
    }

    else {
      setOptionsToggle(false);
    }
  }

   //Ref for modal
   const modalRef = useRef<HTMLTableCellElement>(null);

    function openModal(id: number): void {
      setUserID(id);
      setOptionsToggle(true);
    }
 
    function closeModal(): void {
      setOptionsToggle(false);
    }

 
    function handleOutsideClick(event: MouseEvent): void {
     if (modalRef.current) {
        // Check if the click occurred outside the modal
        if (!modalRef.current.contains(event.target as Node)) {
          closeModal();
        }
        // Check if the click occurred inside the modal but outside the modal content
        else if (!modalRef.current.querySelector('.modal-content')?.contains(event.target as Node)) {
         event.stopPropagation();
        }
      }
    }

   //Function to fetch user and navigate to user details page
   const ViewUserDetails = (id: number) => {
    navigate(`users/${id}`)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });




  return (  
    <>
      <td>
        <span className={User.status}> {User.status} </span>
      </td>
      <td ref={modalRef}> 
        <img src={Options} alt="Options icon" onClick={() => openModal(parseInt(ID))} />
        <div 
          className='user-options' 
          style={{'display': `${userID === parseInt(ID) && optionsToggle === true ? 'block' : 'none'}`}}
        >
          <ul>
            <li onClick={() => {ViewUserDetails(parseInt(ID))}}>
              <img src={ViewDetails} alt="view details icon" />
              view details
            </li>
            <li 
              onClick={() => {
                User['status'] = 'blacklisted'
                setOptionsToggle(false);
              }}
            >
              <img src={BlacklistUser} alt="blacklist user icon" />
              blacklist user
            </li>
            <li 
              onClick={() => {
                User['status'] = 'active'
                closeModal();
              }}
            >
              <img src={ActivateUser} alt="activate user icon" />
              activate user
            </li>
          </ul>
        </div>
      </td>
    </>
  );
}
 
export default UserOptions;