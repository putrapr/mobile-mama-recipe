import axios from 'axios'
// import { REACT_APP_BACKEND_URL } from 'react-native-dotenv'

const api = axios.create({
  baseURL: 'https://be-mamarecipe.vercel.app',
  // baseURL: REACT_APP_BACKEND_URL,
})

export default api
