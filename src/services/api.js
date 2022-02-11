import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`
  }
})

export default api;


