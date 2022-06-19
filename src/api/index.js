import axios from 'axios'

export default axios.create({
  withCredentials: true,
  baseURL: 'https://jayj-fe.github.io/',
  // baseURL: 'http://localhost:9000/',
  headers :{
    post: {
      'Content-Type' : 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin' : '*'
    }
  }
})
