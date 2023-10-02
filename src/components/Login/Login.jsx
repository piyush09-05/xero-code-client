import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import broImage from "../SignUp/bro.jpg"
import xeroLogo from "../SignUp/xero-logo.png"
import SignInButtons from '../SignInButton/SignInButton';

function Login() {

  const navigate  = useNavigate();
  const [formData, setFormData] = useState({
    emailid: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRouting = () =>{

  }

  const handleSocialLogin = () => {
     window.open("https://xerocodee-task-sgpm.vercel.app/auth/google", "_self")
  }

  const handleSubmit = async (e) => { 
    e.preventDefault();

    // Convert the email to lowercase before sending
    const lowerCaseEmail = formData.emailid.toLowerCase();

    try {
      const response = await axios.post('https://xerocodee-task-sgpm.vercel.app/log-in', {
        emailid: lowerCaseEmail,
        password: formData.password,
      });

      if (response.status === 200) {
        // Authentication successful, you can perform actions here (e.g., redirect to a dashboard)
        console.log('Login successful:', response.data);
        navigate('/dashboard');
      } else {
        // Handle other status codes (e.g., authentication failed)
        setError("Registration Failed.")
        console.error('Authentication failed');

      }
    } catch (error) {
      // Handle any network errors or API response errors
      console.error('Login error:', error);
    }

    setFormData({
        emailid:" ",
        password:""
    })
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <img src= {xeroLogo} alt="" />

        <p>Welcome. Login to your account.</p>
      
      <form onSubmit={handleSubmit}>

     
        <p>{error}</p>
        <div>
          
          <input className='form-input'
            type="email"
            name="emailid"
            value={formData.emailid}
            onChange={handleChange}
            required
            placeholder='E-mail'
          />
        </div>
        <div>
          
          <input className='form-input'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder='password'
          />
        </div>
        <button className = "form-button" type="submit" onClick={handleSubmit}>Log In</button>
         <SignInButtons />
        <p>Don't have an Account?
        <Link to="/">
        <button  className='login-button'>Sign-up</button>
        </Link>
          
        </p>
       
      </form>
      </div>
      <div className='imageContainer'>
         <img src={broImage} alt="" />
      </div>
      
    </div>
  );
}

export default Login;
