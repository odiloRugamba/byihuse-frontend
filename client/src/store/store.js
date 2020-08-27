/**
* VueShop Store
*/

import Vue from 'vue'
import Vuex from 'vuex'

// modules
import account from './modules/account';
import ecommerce from './modules/ecommerce';
import sidebar from './modules/sidebar';
import settings from './modules/settings';
import payment from './modules/payment';
import blog from './modules/blog';
import productDetail from './modules/productDetail';

Vue.use(Vuex);
const state = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    assignedDepartments: '',
    token: ''
}

const getters = {
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
}

const actions = {
}

const mutations = {
}
export const store = new Vuex.Store({
    modules: {
        state,
        getters,
        actions,
        mutations,
        ecommerce,
        sidebar,
        settings,
        payment,
        blog,
        productDetail,
        account
    }
})
