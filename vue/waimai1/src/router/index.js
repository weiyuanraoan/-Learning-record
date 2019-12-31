import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/Good.vue')
    },

    {
        path: '/Good',
        name: 'Good',
        component: () =>
            import ('../views/Good.vue')
    }, {
        path: '/Ratings',
        name: 'Ratings',

        component: () =>
            import ('../views/Ratings.vue')
    }, {
        path: '/Seller',
        name: 'Seller',

        component: () =>
            import ('../views/Seller.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router