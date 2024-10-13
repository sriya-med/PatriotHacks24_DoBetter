import React from 'react'
import './Login.css'

import email_icon from '../Assets/email.png'
import lock_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png'



const Login = () => {

  const handleLogin = () => {
    // Redirect to a new page (e.g., "/home" for localhost:5173/home)
    window.location.href = '/home';  // Change this to the desired page path
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {/*first pic */}
        <div className='input'>
          <img src={person_icon} alt=''/>
          <input type='text'/>
          {/*second pic */}
        </div>
        <div className='input'>
          <img src={email_icon} alt=''/>
          <input type='email'/>
        </div>
          {/*third pic */}
        <div className='input'>
          <img src={lock_icon} alt=''/>
          <input type='password'/>
        </div>
      </div>
      <div className="forgot-password">Forgot Password</div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit" onClick={handleLogin}>Login</div>
      </div>
    </div>
  )
}

export default Login
