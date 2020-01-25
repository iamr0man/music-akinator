export default {
  namespaced: true,
  state: {
    lyricsType: ''
  },
  mutations: {
    SET_LYRICS(state, type){
      state.lyricsType = type
    }
  },
  actions: {
    changeLyricsType({ commit }, type){
      commit('SET_LYRICS', type)
    }
  },
  getters: {
    lyricsType: state => state.lyricsType
  },
}