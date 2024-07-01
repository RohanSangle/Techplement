import React, { useState } from 'react'
import './login.css'

import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

import {Link, useNavigate} from 'react-router-dom';
import { signin, signup } from '../../../actions/auth';
// import { AUTH } from '../../constants/actionTypes';

const initialState = { username: '', email: '', password: '', confirmPassword: '' };

const Login = () => {

  // const {userLoggedIn} = useAuth();
  const [form, setForm] = useState(initialState);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [isSigningIn, setIsSigningIn] = useState(false);
  const dispatch = useDispatch();
  // const history = useHistory();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault()
    // if(!isSigningIn){
    //   setIsSigningIn(true)
    //   await doSignInWithEmailAndPassword(email, password)
    // }
    dispatch(signin(form, navigate));
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // if(userLoggedIn){
  //   return <Navigate to="/quotes" replace={true} />
  // }

  return (
    <div className="login-page">
      {/* {userLoggedIn && (<Navigate to={'/main'} replace={true}/>)} */}

      {/* <img className='logo3' src={logo} alt=""/> */}
      <div className='form-wrapper'>
        <h2 className='form-title'>Login</h2>
        <form className='form' onSubmit={onSubmit}>
          <div className='input-wrapper'>
            <input
              placeholder='username'
              type="text"
              name="username"
              required
              value={form.username}
              autoComplete='off'
              onChange={handleChange}

            />
            {/* {errors.email && <span className="error">{errors.email}</span>} */}
          </div>
          <div className='input-wrapper'>
            <input
              placeholder='Email address'
              type="email"
              name="email"
              required
              value={form.email}
              autoComplete='off'
              onChange={handleChange}

            />
            {/* {errors.email && <span className="error">{errors.email}</span>} */}
          </div>
          <div className='input-wrapper'>
            <input
              placeholder='Password'
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}

            />
            {/* {errors.password && <span className="error">{errors.password}</span>} */}
          </div>
          {/* <button className='submit-button' type="submit" disabled={isSigningIn}>Login</button> */}
          <button className='submit-button' type="submit" >Login</button>
          <p className="login-hint">Don't have an account? <Link to='/register'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login