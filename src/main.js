import Vue from 'vue'
import OneProfile from '@/components/OneProfile.vue'
import Profiles from '@/components/Profiles.vue'
import VueRouter from 'vue-router'


Vue.config.productionTip = false

const router = new VueRouter({
    routes: [{ path: '/', component: Profiles },
        { path: '/users/name', component: OneProfile }
    ],
    mode: 'history'
})


new Vue({
    render: h => h(Profiles),
    router
}).$mount('#app')