import React,{ useState, useEffect } from 'react'
import './quotes.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actionType from '../../constants/actionType.js';
import { jwtDecode } from 'jwt-decode';

const Quotes = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  // const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <>
      {/* <button className='logout-button' onClick={logout}>Logout</button> */}
      <div className='user-avatar'>
        {/* <div className='settingsicon'><IoSettingsOutline /></div> */}
        <img className='settingsicon' src="" alt="" />
        <button className='logout-button' onClick={logout}>Logout</button>
      </div>
    </>
  )
}

export default Quotes