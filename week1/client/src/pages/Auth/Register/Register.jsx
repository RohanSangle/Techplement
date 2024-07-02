import React,{useState}  from 'react'
import './register.css'

import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

import { signin, signup } from '../../../actions/auth';

import { useNavigate, Link } from 'react-router-dom'
// import { useAuth } from '../../../contexts/authContext';

const initialState = { username: '', email: '', password: '', confirmPassword: '' };

const Register = () => {

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setconfirmPassword] = useState('')
  // const [isRegistering, setIsRegistering] = useState(false)

  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  // const history = useHistory();
  const navigate = useNavigate();

  // const { userLoggedIn } = useAuth()

  const onSubmit = (e) => {
    e.preventDefault()
    // if(!isRegistering) {
    //   setIsRegistering(true)
    //   await doCreateUserWithEmailAndPassword(email, password)
    // }
    // console.log("Form data on submit:", form);
    dispatch(signup(form, navigate));
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="login-page">
      {/* {userLoggedIn && (<Navigate to={'/login'} replace={true} />)} */}

      {/* <img className='logo3' src={logo} alt="" /> */}
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
            {/* {errors.email && <span className="error">{errors.email}</span>} */}
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
            {/* {errors.email && <span className="error">{errors.email}</span>} */}
          </div>
          <div className='input-wrapper2'>
            <input
              // disabled={isRegistering}
              placeholder='Password'
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
            />
            {/* {errors.password && <span className="error">{errors.password}</span>} */}
          </div>
          <div className='input-wrapper2'>
            <input
              // disabled={isRegistering}
              placeholder='Confirm password'
              type="password"
              name="confirmPassword"
              required
              value={form.confirmPassword}
              onChange={handleChange}
            />
            {/* {errors.password2 && <span className="error">{errors.password2}</span>} */}
          </div>
          <button className='submit-button2' type="submit">Sign Up</button>
          <p className="login-hint">Already have an account? <Link to={'/login'}>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register