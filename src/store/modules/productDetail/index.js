import api from 'Api'
import {languages, currencies} from "./data";
import department from "Api/department";
import currency from "Api/currency";
const state = {
   products:{},
   featured: {},
   i: 0,
   selectedProduct: null,
   languages,
	selectedLocale: languages[0],
	currencies,
   selectedCurrency: currencies[0],
   symbol: false
}

// getters
const getters = {
   currentValue: state =>{
      return state.currentValue
   },
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
      const rescurr= await currency.getcurrency();
      // console.log(rescurr)
      rescurr.data.data.forEach(el =>{
         // console.log()
         if (el.symbol === state.selectedCurrency.symbol) {
            state.currentValue=el.currentValue
         }
         // console.log(s)
      })
      // console.log()
      // console.log(res.data)
      if (state.selectedLocale.name === 'French') {
         res.data.data.forEach(el => {
            el.categories.forEach(pr =>{
               pr.products.forEach(prdata =>{
               if (prdata.featured === true) {
                 obj.push({
                  objectID: prdata._id,
                  type: el.name.fr,
                  image:'Https://byihuse.rw/'+prdata.pictures.pic1,
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
               if (prdata.featured === true) {
                 obj.push({
                  objectID: prdata._id,
                  type: el.name.en,
                  image:'Https://byihuse.rw/'+prdata.pictures.pic1,
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
      state.featured = data
      // state.products = produ
      // console.log(produ)
      // console.log(localStorage.getItem('lang'))
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
