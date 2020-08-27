import api from './index.js'

export default {
  async getDepartment () {
    const res = api().get('/api/departments')
    return res
  }
}
