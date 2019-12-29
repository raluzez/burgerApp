import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-f7589.firebaseio.com/'
})

export default instance
