var _a;
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// TYPES
var MAIN_SET_COUNTER = 'MAIN_SET_COUNTER';
// STATE
var state = {
    counter: 1
};
// MUTATIONS
var mutations = (_a = {},
    _a[MAIN_SET_COUNTER] = function (state, obj) {
        state.counter = obj.counter;
    },
    _a);
// ACTIONS
var actions = ({
    setCounter: function (_a, obj) {
        var commit = _a.commit;
        commit(MAIN_SET_COUNTER, obj);
    }
});
export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions
});
