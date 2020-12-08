import Vue from 'vue'
import Router from 'vue-router'
import Todos from './views/Todos'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/todos',
            component: Todos
        },
        {
            path: '/',
            component: () => import('./views/Rosim.vue')
        }
    ]
})