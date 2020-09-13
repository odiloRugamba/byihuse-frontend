import axios from 'axios'

const env = process.env.NODE_ENV || 'dev'

let host = ''

if (env === 'production') {
  host = '[host link]'
} else {
  host = 'http://localhost:4000'
  // host = 'Https://byihuse.rw'
}

export default () => {
  return axios.create({
    baseURL: host
  })
}
