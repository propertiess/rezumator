import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(config => {
  if (config.headers) {
    config.headers.secret = process.env.SECRET_KEY;
  }

  return config;
});

export default instance;
