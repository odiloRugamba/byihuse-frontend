import api from './index.js'

export default {
  async signin (data) {
    const res= api().post('/api/auth/signin', data)
    return res
  },
  async signup (data) {
    return api().post('/api/auth/signup', data)
  },
  async updateName (data) {
    return api().post('/api/auth/name', data)
  },
  async updateEmail (data) {
    return api().post('/api/auth/email', data)
  },
  async updatePassword (data) {
    return api().post('/api/auth/password', data)
  },
  async updateDepartments (data) {
    return api().post('/api/auth/departmants', data)
  }
}
