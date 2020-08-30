import axios from 'axios'

const env = process.env.NODE_ENV || 'dev'

let host = ''

if (env === 'production') {
  host = '[host link]'
} else {
  host = 'http://162.243.173.84:4000'
}

export default () => {
  return axios.create({
    baseURL: host
  })
}
