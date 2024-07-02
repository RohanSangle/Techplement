import React from 'react'
import './home.css'

import {useNavigate} from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const gotoauth = () => {
    navigate('/login');
  }

  return (
    <div>
      <h1>Quotes web App</h1>
      <h2 className='miniheader' >Inspire! Aspire! Lead!</h2>
      <button onClick={gotoauth}>Sign In</button>
    </div>
  )
}

export default Home