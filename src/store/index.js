import Vue from "vue";
import Vuex from "vuex";
import lyrics from './modules/lyrics'
import song from './modules/song'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    lyrics,
    song,
    user
  }
});
