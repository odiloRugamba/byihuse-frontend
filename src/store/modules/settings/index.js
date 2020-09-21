
// import {languages, currencies} from "./data";

const state = {
	rtlLayout: false
	
}

// getters
const getters = {
	rtlLayout: state =>{
		return state.rtlLayout;
	}
}

// actions
const actions = {
	changeRtlLayout(context){
		context.commit('rtlLayoutHandler');
	}
}

// mutations
const mutations = {
	/**
    * method for setting language state
   */
	/**
    * method for setting rtl layout
   */
	rtlLayoutHandler(state){
		state.rtlLayout = !state.rtlLayout;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
