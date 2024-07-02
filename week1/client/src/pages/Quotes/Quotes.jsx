import React,{ useState, useEffect} from 'react'
import './quotes.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actionType from '../../constants/actionType.js';
import { jwtDecode } from 'jwt-decode';
import { getRandomQuote } from '../../actions/quote.js';

const Quotes = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  // const location = useLocation();
  const navigate = useNavigate();
  const quote = useSelector((state) => state.quote?.quote);
  const [showQuote, setShowQuote] = useState(false);

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

  const fetchQuote = () => {
    // console.log('Fetching quote...');
    dispatch(getRandomQuote());
    setShowQuote(true);
  };

  useEffect(() => {
    console.log('Quote state updated:', quote);
  }, [quote]);

  useEffect(() => {
    console.log('User state:', user);
  }, [user]);

  return (
    <>

      <h2 className='mainhead'>Welcome {user?.result.username || 'Guest'}!</h2>
      {/* <button className='logout-button' onClick={logout}>Logout</button> */}
      {/* <div className='user-avatar'>
        <div className='settingsicon'><IoSettingsOutline /></div>
        <img className='settingsicon' src="" alt="" />
      </div> */}
      <button className='logout-button' onClick={logout}>Logout</button>

      <button className='fetch-quote-button' onClick={fetchQuote}>Inspire Me!</button>
      {/* {console.log("quote in frontend :" + quote)} */}
      {showQuote && quote && (
        <div className='quote-display'>
          <h2 className='quote-text'>"{quote.content}"</h2>
          <p className='quote-author'>~ {quote.author}</p>
        </div>
      )}
    </>
  )
}

export default Quotes