import api from './index.js'

export default {
  async getProducts () {
    const res = api().get('/api/products')
    // console.log(res)
    return res
  }
}
