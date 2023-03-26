import { useState } from 'react';
import '../assets/styles/login.scss';
import Logo from '../assets/images/logo.svg';
import LoginImg from '../assets/images/login_illustration.svg';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInput } from '../utils/interfaces'



function Login() {
  
  //Form validation
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => {
    window.location.href = '/dashboard';
  }

  //Stateful variable for controlling password input show/hide feature
  const [togglePassword, setTogglePassword] = useState(false);

  //Function for show/hide password feature
  const passwordToggle = () => {
    if (togglePassword === false) {
      setTogglePassword(true);
    }
  
    else {
      setTogglePassword(false);
    }
  }



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
              <form method='POST' data-testid='login-form' onSubmit={handleSubmit(onSubmit)}>
                <input 
                  type="email" 
                  placeholder='Email' 
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"} 
                />
                {errors.email?.type === 'required' && <p className='error' role="alert">Email is required</p>}

                <section id="relative-wrapper">
                  <p 
                    className="show-password"
                    onClick={passwordToggle}
                  > 
                    {togglePassword === false ? 'show' : 'hide'}  
                  </p>
                  <input
                    placeholder='Password' 
                    {...register("password", { required: true })} 
                    aria-invalid={errors.password ? "true" : "false"} 
                    type={togglePassword === false ? 'password' : 'text'} 
                  />
                </section>
                {errors.password?.type === 'required' && <p className='error' role="alert">Password is required</p>}

                <p> forgot password? </p>

                <input type="submit" value="log in" className='log-in' data-testid='submit-button' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login