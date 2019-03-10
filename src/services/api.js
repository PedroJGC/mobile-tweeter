import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.5:3000'
});

export default api;

//10.0.2.2 ou 10.0.3.2 ou 192.168.0.5