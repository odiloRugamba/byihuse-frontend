import api from 'Api'
import {languages, currencies} from "./data";
import department from "Api/department";
const state = {
   products:{},
   featured: {},
   i: 0,
   selectedProduct: null,
   languages,
	selectedLocale: languages[0],
	currencies,
	selectedCurrency: currencies[0],
}

// getters
const getters = {
   languages: state => {
		return state.languages;
	},
	selectedLocale: state => {
		return state.selectedLocale;
	},
	currencies: state =>{
		return state.currencies;
	},
	selectedCurrency: state => {
		return state.selectedCurrency;
	},
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
   changeLanguage(context, payload) {
		context.commit('changeLanguageHandler', payload);
	},
	changeCurrency(context, payload){
		context.commit('changeCurrency', payload);
	},
}

// mutations
const mutations = {
   async SET_prducts (state) {
      try {
      // console.log(products)
      // if (products.data.feature === false) {
      // }
      var obj = []
      var data = {}
      const res = await department.getDepartmentall();
      // console.log(res.data)
      if (state.selectedLocale === 'French') {
         res.data.data.forEach(el => {
            el.categories.forEach(pr =>{
               pr.products.forEach(prdata =>{
               if (prdata.featured === false) {
                 obj.push({
                  objectID: prdata._id,
                  type: el.name.fr,
                  image:'http://localhost:4000/'+prdata.pictures.pic1,
                  price: prdata.price,
                  name: prdata.name.fr,
                  category: pr.name.fr
                })
               }
               
               //  console.log(prdata)
               })
            })
            data[el.name.fr] = {...obj}
            // console.log(data)
            for (let i = 0; i < obj.length; i++) {
               delete obj[i]
            }
         });  
      } else {
         // console.log(state.selectedLocale)
         // console.log('ho')
         res.data.data.forEach(el => {
            el.categories.forEach(pr =>{
               pr.products.forEach(prdata =>{
               if (prdata.featured === false) {
                 obj.push({
                  objectID: prdata._id,
                  type: el.name.en,
                  image:'http://localhost:4000/'+prdata.pictures.pic1,
                  price: prdata.price,
                  name: prdata.name.en,
                  category: pr.name.en
                })
               }
               
               //  console.log(prdata)
               })
            })
            data[el.name.en] = {...obj}
            // console.log(data)
            for (let i = 0; i < obj.length; i++) {
               delete obj[i]
            }
         });
      }
      state.featured = data,
      // state.products = produ
      // console.log(produ)
      console.log(localStorage.getItem('lang'))
      } catch (err) {
         console.log(err)
      }
      
   },
   changeLanguageHandler(state, language) {
		state.selectedLocale = language;
	},
	/**
    * method for setting currency
   */
	changeCurrency(state, currencies){
		state.selectedCurrency = currencies;
	},
}

export default {
   state,
   getters,
   actions,
   mutations
}
