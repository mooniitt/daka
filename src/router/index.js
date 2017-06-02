import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Load from '../components/Load'
import Register from '../components/Register'
Vue.use(Router)

const routes = [{
	path: '/login',
	component: Login,
	children: [{
		path: 'load',
		component: Load
	}, {
		path: 'register',
		component: Register
	}]
}]

export default new Router({
	routes
})