import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.zippia.com/api'
})

export default api
