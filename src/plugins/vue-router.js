import Vue from 'vue'
import VueRouter from 'vue-router'
import Panel from '../components/Panel'
import About from '../components/About'
import Setting from '../components/Setting'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Panel',
            component: Panel
        }, {
            path: '/client',
            name: 'Client',
            component: Panel
        }, {
            path: '/server',
            name: 'Server',
            component: Panel
        }, {
            path: '/about',
            name: 'About',
            component: About
        }, {
            path: '/setting',
            name: 'Setting',
            component: Setting
        }
    ]
})
