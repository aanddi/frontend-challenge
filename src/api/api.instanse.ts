import axios from 'axios'

const getContentType = () => ({
   'Content-Type': 'application/json',
   "x-api-key": process.env.REACT_APP_API_KEY
})

export const instance = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL,
   headers: getContentType()
})

// // Добавляем API ключ в качестве query параметра к каждому запросу
// instance.interceptors.request.use(config => {
//    config.params = {
//       ...config.params,
//       api_key: process.env.REACT_APP_API_KEY
//    }
//    return config
// })
