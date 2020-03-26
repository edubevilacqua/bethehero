import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bethehero-ongs.herokuapp.com/'
});

export default api;