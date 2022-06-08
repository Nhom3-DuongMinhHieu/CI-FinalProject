import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.example.com'
    : 'http://localhost:5000';

const API = axios.create({
  baseURL,
});

export const fetchAllTours = async () => await API.get('/tours');
