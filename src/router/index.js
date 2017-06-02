import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Load from '../components/Load'
Vue.use(Router)

const routes = [{
	path: '/login',
	component: Login
}]

export default new Router({
	routes
})