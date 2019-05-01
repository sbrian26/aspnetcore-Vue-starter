import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
Vue.use(VueRouter);
var router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkExactActiveClass: 'active',
    scrollBehavior: function (to) {
        if (to.hash) {
            return { selector: to.hash };
        }
        else {
            return { x: 0, y: 0 };
        }
    }
});
export default router;
