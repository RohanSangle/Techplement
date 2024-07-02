import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
const QUOTE_API = axios.create({ baseURL: 'https://api.quotable.io' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const signIn = (formData) => API.post('/user/login', formData);
export const signUp = (formData) => API.post('/user/register', formData);
export const fetchRandomQuote = () => QUOTE_API.get('/random');