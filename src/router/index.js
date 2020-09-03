import Vue from 'vue'
import Router from 'vue-router'

import userRoutes from './user';
const NotFound = () => import('Views/NotFound.vue');

Vue.use(Router)

export default new Router({
	routes: [
		userRoutes,
		{ 
			path: '*',
			component: NotFound, 
			name:'NotFound'
		},
	]
})

