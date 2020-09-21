import axios from 'axios'

const env = process.env.NODE_ENV || 'dev'

let host = ''

if (env === 'production') {
  // host = 'https://byihuse.rw'
} else {
<<<<<<< HEAD
   host = 'http://localhost:4001'
  //host = 'Https://byihuse.rw'
=======
  host = 'http://localhost:4000'
  // host = 'Https://byihuse.rw'
>>>>>>> dcb97499309ee1f3fb6008cd0c258643286e823e
}

export default () => {
  return axios.create({
    baseURL: host
  })
}
