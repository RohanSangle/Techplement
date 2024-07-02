import axios from 'axios';
import * as api from '../api/index.js';

export const getRandomQuote = () => async (dispatch) => {
  try {
    const response = await api.fetchRandomQuote();
    // console.log('API response:', response);
    dispatch({ type: 'FETCH_QUOTE', payload: response.data });
    // console.log('Dispatched FETCH_QUOTE with payload:', response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getQuotesByAuthor = (author) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.quotable.io/quotes?author=${author}`);
    // console.log('API response:', response.data);
    dispatch({ type: 'FETCH_QUOTES_BY_AUTHOR', payload: response.data.results });
  } catch (error) {
    console.error('Error fetching quotes by author:', error);
  }
};
