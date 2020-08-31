// import { products } from "./data";
import api from 'Api'
import department from "Api/department";
import product from "Api/products";
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
   async SET_prducts (state, products) {
      try {
      // console.log(products)
      // if (products.data.feature === false) {
      // }
      const res = await department.getDepartment();
      const respro = await product.getProducts()
      // console.log(res.data.data)

      var obje = {}
      var key= null
      products.data.forEach(el => {
         res.data.data.forEach(dep => {
            key = dep.name.en
            if (el.department === dep._id) {
               respro.data.data.forEach( resp => {
                  if (el._id === resp.category ) {
                     obje[key] = {
                        objectID: resp._id,
                        image: resp.picture1,
                        brand: resp.company,
                        price: resp.price,
                        rate: 4,
                        description: resp.description.en
                     }
                  }
               });
               console.log(key)
            }
            // console.log(el.department,dep._id)
            // console.log('hhajh')
            state.products = obje
         });
      });
      state.products = obje
      console.log(state.products)
      //   state.products 
      } catch (err) {
         console.log(err)
      }
      
   }
}

export default {
   state,
   getters,
   actions,
   mutations
}
