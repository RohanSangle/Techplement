import React,{ useState, useEffect} from 'react'
import './quotes.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actionType from '../../constants/actionType.js';
import { jwtDecode } from 'jwt-decode';
import { getRandomQuote, getQuotesByAuthor } from '../../actions/quote.js';

const Quotes = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quote = useSelector((state) => state.quote?.quote);
  const authorQuotes = useSelector((state) => state.quote?.authorQuotes);
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

  const handleSearch = (e) => {
    setAuthor(e.target.value);
  };

  const searchQuotesByAuthor = () => {
    if (author.trim()) {
      dispatch(getQuotesByAuthor(author));
    }
  };

  // useEffect(() => {
  //   console.log('Quote state updated:', quote);
  // }, [quote]);

  // useEffect(() => {
  //   console.log('User state:', user);
  // }, [user]);
  // useEffect(() => {
  //   console.log('Author quotes state updated:', authorQuotes);
  // }, [authorQuotes]);

  return (
    <>

      <h2 className='mainhead'>Welcome {user?.result.username || 'Guest'}!</h2>
      <button className='logout-button' onClick={logout}>Logout</button>
      <button className='fetch-quote-button' onClick={fetchQuote}>Inspire Me!</button>
      {showQuote && quote && (
        <div className='quote-display'>
          <h2 className='quote-text'>"{quote.content}"</h2>
          <p className='quote-author'>~ {quote.author}</p>
        </div>
      )}

      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search by author'
          value={author}
          onChange={handleSearch}
        />
        <button onClick={searchQuotesByAuthor}>Search</button>
      </div>
      <div className='author-quotes'>
        {authorQuotes && authorQuotes.map((quote) => (
          <div key={quote._id} className='quote-card'>
            <p className='quote-content'>"{quote.content}"</p>
            <p className='quote-author'>~ {quote.author}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Quotes