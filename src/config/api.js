import axios from 'axios'
// import { REACT_APP_BACKEND_URL } from 'react-native-dotenv'
// import AsyncStorage from '@react-native-async-storage/async-storage'

const api = axios.create({
  // baseURL: 'https://be-mamarecipe.vercel.app',
  baseURL: process.env.BACKEND_URL,

})

// const getToken = async () => {
//   const token = await AsyncStorage.getItem('token')
//   console.log('token in default api: ' + token)
//   return (token) ? token : ''
// }

// api.defaults.headers.common['Authorization'] = getToken()

// api.interceptors.request.use(async function (config) {
//   const token = await AsyncStorage.getItem('token')
//   console.log('token in default api: ' + token)
//   if (token) {
//     config.headers = {
//       Authorization: `${token}`,
//       'Content-Type': 'multipart/form-data',
//     }
//   }
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

export default api
