import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import broimage from './bro.jpg'
import xeroLogo from './xero-logo.png'

import SignInButton from "../SignInButton/SignInButton"
import "./Signup.css"

function RegistrationForm() {
  // const history = useHistory();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    emailid: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // Send registration data to the backend API using Axios
    axios
      .post('http://localhost:9000/sign-up', formData)
      .then((response) => {
        console.log('Registration successful:', response.data);
        // history.push('/dashboard');
        navigate(`select/${formData.firstname}/${formData.emailid}`);
      })
      .catch((error) => {
        setError("Sign-up faile");
        console.error('Registration error:', error);
        // Handle registration error
      });

      setFormData({
        firstname:"",
        lastname:"",
        emailid:"",
        password:"",
        confirmPassword:""
      })
  };

  return (
    <div className='container '>
       <div className='form-container'>
       <img src={xeroLogo} className='logo-img' alt="" />
       <p>Hello. Create your account</p>
       
      <form onSubmit={handleSubmit}>
     
        <div>
          
          <input className='form-input'
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
            placeholder='First Name'
          />
        </div>
        <div>
          
          <input className='form-input'
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
            placeholder='Last Name'
          />
        </div>
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
        <div>
       
          <input className='form-input'
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder='confirm password'
          />
        </div>
        <button className = "form-button" type="submit">Register</button>
        <SignInButton />

        <p>Already have an account?
          <Link to = "/login">
          <button className='login-button'>LOGIN</button>
          </Link>
        </p>
        <p>{error}</p>
      </form>


    </div>



    <div className='imageContainer'>
        <img src={broimage} alt="image" />
      </div>
    </div>
    
  );
}

export default RegistrationForm;
