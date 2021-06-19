import axios from 'axios';
import apiUrl from '../helper/apiUrl';

export default axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json"
  }
});
