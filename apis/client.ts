import axios from 'axios'

let baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;

const api = axios.create({
  baseURL: baseURL,
  timeout: 180000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
