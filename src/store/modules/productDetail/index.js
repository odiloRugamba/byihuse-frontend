// import { products } from "./data";
import api from 'Api'

const state = {
   products:{},
   i: 0,
   selectedProduct: null
}

// getters
const getters = {
   products: state => {
      return state.products
   },
   selectedProduct: state => {
      return state.selectedProduct
   }
}

// actions 
const actions = {
   getproducts ({ commit }) {
      api()
      .get('/api/categories')
      .then(response =>{
         commit('SET_prducts', response.data)
      })
   }
}

// mutations
const mutations = {
   SET_prducts (state, products) { 
      if (products.data.feature === false) {
         console.log('products.data')
      }
       var obje = {}
      products.data.forEach(el => {
         state.i++
         var key = el.name.kiny + state.i
      console.log(key)
       obje[key] = el
      });
      console.log(obje)
   //   state.products
   }
}

export default {
   state,
   getters,
   actions,
   mutations
}
