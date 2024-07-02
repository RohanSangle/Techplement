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
