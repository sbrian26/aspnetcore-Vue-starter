import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// TYPES
const MAIN_SET_COUNTER = 'MAIN_SET_COUNTER'

// STATE
const state = {
  counter: 1
}

// MUTATIONS
const mutations = {
  [MAIN_SET_COUNTER] (state: { counter: any; }, obj: { counter: any; }) {
    state.counter = obj.counter
  }
}

// ACTIONS
const actions = ({
  setCounter ({ commit }: any, obj: any) {
    commit(MAIN_SET_COUNTER, obj)
  }
})

export default new Vuex.Store({
  state,
  mutations,
  actions
})
