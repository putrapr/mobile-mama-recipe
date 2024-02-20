import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const api = axios.create({
  baseURL: process.env.BACKEND_URL,
})

api.interceptors.request.use(async function (config) {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    config.headers = {
      Authorization: `${token}`,
    }
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default api
