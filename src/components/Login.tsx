import { useState } from 'react';
import '../assets/styles/index.scss';
import Logo from '../assets/images/logo.png';
import LoginImg from '../assets/images/login_illustration.png';


function Login() {
  //Stateful variable for controlling password input show/hide feature
  const [togglePassword, setTogglePassword] = useState(false);


  return (
    <div id='login-wrapper'>
      <div className="form-wrapper">
        <div className="logo">
          <img src={Logo} alt="Lendsqr logo" />
        </div>
        <div className="login-form">
          <div id="login-photo">
            <img src={LoginImg} alt="Login form illustration" />
          </div>
          <div className="form-wrapper">
            <div className='input-wrapper'>
              <h1> Welcome! </h1>
              <p id="details">
                Enter details to login.
              </p>
              <form action="">
                <input 
                  required 
                  type="email" 
                  placeholder='Email' 
                />
                <div id="relative-wrapper">
                  <p 
                    className="show-password"
                    onClick={() => {
                      if (togglePassword === false) {
                        setTogglePassword(true);
                      }

                      else {
                        setTogglePassword(false);
                      }
                    }}
                  > 
                    {togglePassword === false ? 'show' : 'hide'}  
                  </p>
                  <input 
                    required 
                    type={togglePassword === false ? 'password' : 'text'} 
                    placeholder='Password' 
                  />
                </div>
                <p> forgot password? </p>
                <button className="log-in"> log in </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login