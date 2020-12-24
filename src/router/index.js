import Vue from 'vue'
import VueRouter from 'vue-router' 

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter) 

export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:Msite,
            meta:{
                show:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                show:true
            }
        },
        {
            path:'/order',
            component:Order ,
            meta:{
                show:true
            }
        },
        {
            path:'/profile',
            component:Profile ,
            meta:{
                show:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/',
            redirect:'/msite'
        }
       

    ]
})