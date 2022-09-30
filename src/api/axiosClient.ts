import axios from 'axios'
// import queryString from 'query-string'


const baseUrl = 'https://api.coinranking.com/v2'

const axiosClient = axios.create({
  baseURL: baseUrl,
})

axiosClient.interceptors.request.use(
  async (config:any) => {
      config.headers["Content-Type"] = 'application/json';
      return {
        ...config,
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': `${process.env.API_KEY}`
        }
      }
  },
  (error) => {
      return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(response => {
  if (response && response.data) return response.data
  return response
}, err => {
  if (!err.response) {
    return console.log(err)
  }
  throw err.response
})

export default axiosClient