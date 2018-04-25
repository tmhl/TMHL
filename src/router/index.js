import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';

// account folder
import accountLogin from '@/components/account/login';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: index
    }, {
        path: '/login',
        component: accountLogin
    }]
});
