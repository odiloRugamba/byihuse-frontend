import api from './index.js'

export default {
  async signin (data) {
    return api().post('/api/auth/signin', data)
  },
  async signup (data) {
    return api().post('/api/auth/signup', data)
  }
}
