import React,{useState}  from 'react'
import './register.css'

import { useDispatch } from 'react-redux';
import { signup } from '../../../actions/auth';

import { useNavigate, Link } from 'react-router-dom'
// import { useAuth } from '../../../contexts/authContext';

const initialState = { username: '', email: '', password: '', confirmPassword: '' };

const Register = () => {

  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { userLoggedIn } = useAuth()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(signup(form, navigate));
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="login-page">
      <div className='form-wrapper2'>
        <h2 className='form-title'>Sign up</h2>
        <form className='form' onSubmit={onSubmit}>
          <div className='input-wrapper2'>
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
          <div className='input-wrapper2'>
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
          <div className='input-wrapper2'>
            <input
              placeholder='Password'
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className='input-wrapper2'>
            <input
              placeholder='Confirm password'
              type="password"
              name="confirmPassword"
              required
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button className='submit-button2' type="submit">Sign Up</button>
          <p className="login-hint">Already have an account? <Link to={'/login'}>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register