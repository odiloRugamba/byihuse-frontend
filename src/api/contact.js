import api from './index.js'

export default {
  async postMessage (data) {
    const res = api().post('/api/messages',data)
    // console.log(res)
    return res
  }
}