import React, { useState } from 'react'
import './login.css'

import { useDispatch } from 'react-redux';
// import { useAuth } from '../../../contexts/authContext';

import {Link, useNavigate} from 'react-router-dom';
import { signin } from '../../../actions/auth';

const initialState = { username: '', email: '', password: '', confirmPassword: '' };

const Login = () => {

  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { login } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(signin(form, navigate));
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="login-page">
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
          </div>
          <button className='submit-button' type="submit" >Login</button>
          <p className="login-hint">Don't have an account? <Link to='/register'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login