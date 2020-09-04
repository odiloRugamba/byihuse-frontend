/**
* VueShop Store
*/

import Vue from 'vue'
import Vuex from 'vuex'

// modules
// import account from './modules/account';
import ecommerce from './modules/ecommerce';
import sidebar from './modules/sidebar';
import settings from './modules/settings';
import payment from './modules/payment';
import blog from './modules/blog';
import productDetail from './modules/productDetail';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        assignedDepartments: '',
        token: '',
        drawer: null,
        totalPrice: '',
        linksformbackend: 'http://192.168.43.9:4000/'
    },
    getters:{
        linksformbackend: state =>{
            return state.linksformbackend;
        },
        firstName: state => {
            return state.firstName;
        },
        lastName: state => {
            return state.lastName;
        },
        email: state => {
            return state.email;
        },
        role: state => {
            return state.role;
        },
        assignedDepartments: state => {
            return state.assignedDepartments;
        },
        drawer: state =>{
            return state.drawer
        },
        totalPrice: state => {
            return state.totalPrice;
        },
    },
    
    actions:{
    },
    
    mutations:{
        showOrdervu (state, count) {
        if (state.drawer === true) {
            state.drawer = null
        }else if (state.drawer === null) {
           state.drawer = true
        }
        // state.drawer= true
          console.log(state.drawer, count)
        }
    },
    modules: {
        ecommerce,
        sidebar,
        settings,
        payment,
        blog,
        productDetail
    }
})
