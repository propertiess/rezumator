import axios, { AxiosHeaders } from 'axios';

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(
  config => {
    (config.headers as AxiosHeaders).set(
      'secret',
      process.env.SECRET_KEY ?? ''
    );

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
