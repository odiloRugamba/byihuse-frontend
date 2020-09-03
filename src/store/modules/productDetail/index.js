// import { products } from "./data";
import api from 'Api'
import department from "Api/department";
// import { delete } from 'vue/types/umd';
// import product from "Api/products";
const state = {
   products:{},
   featured: {},
   i: 0,
   selectedProduct: null
}

// getters
const getters = {
   products: state => {
      return state.products
   },
   featured: state =>{
      return state.featured
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
   },
   // getprfordetails ({ commit }) {
   //    api()
   //    .get('/api/categories')
   //    .then(response =>{
   //       commit('SET_prducts', response.data)
   //    })
   // }
}

// mutations
const mutations = {
   async SET_prducts (state, products) {
      try {
      console.log(products)
      // if (products.data.feature === false) {
      // }
      var obj = []
      var data = {}
      const product = []
      const produ = {}
      const res = await department.getDepartmentall();
      console.log(res.data)
      res.data.data.forEach(el => {
         el.categories.forEach(pr =>{
            pr.products.forEach(prdata =>{
            if (prdata.featured === false) {
              obj.push({
               objectID: prdata._id,
               type: el.name.en,
               image:'https://byihuse.rw/'+prdata.pictures.pic1,
               price: prdata.price,
               name: prdata.name.en,
               category: pr.name.en
             })
            }
            product.push({
               objectID: prdata._id,
               type: el.name.en,
               image:'https://byihuse.rw/'+prdata.pictures.pic1,
               price: prdata.price,
               name: prdata.name.en,
               rate: 3,
               image_gallery: [
                  'https://byihuse.rw/'+prdata.pictures.pic1,
                  'https://byihuse.rw/'+prdata.pictures.pic2,
                  'https://byihuse.rw/'+prdata.pictures.pic3,
                  'https://byihuse.rw/'+prdata.pictures.pic4
               ],
               description: prdata.description.en
             })
            })
         })
         data[el.name.en] = {...obj}
         produ[el.name.en] = {...product}
         // console.log(data)
         for (let i = 0; i < obj.length; i++) {
            delete obj[i]
            delete product[i]
         }
      }); 
      state.featured = data,
      state.products = produ
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
