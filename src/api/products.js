import api from './index.js'

export default {
  async getProducts () {
    const res = api().get('/api/products')
    // console.log(res)
    return res
  },
  async getOne (id) {
    const res = api().get(`/api/products/${id}`)
    // console.log(res)
    return res
  },
}
