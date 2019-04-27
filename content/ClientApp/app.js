var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Vue from 'vue';
import axios from 'axios';
import router from './router/index';
import store from './store';
import { sync } from 'vuex-router-sync';
import App from 'components/app-root.vue';
import { FontAwesomeIcon } from './icons';
// Registration of global components
Vue.component('icon', FontAwesomeIcon);
Vue.prototype.$http = axios;
sync(store, router);
var app = new Vue(__assign({ store: store,
    router: router }, App));
export { app, router, store };
