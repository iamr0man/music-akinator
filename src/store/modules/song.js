export default {
  namespaced: true,
  state: {
    proposeSongs: {}
  },
  mutations: {
    SET_SONG(state, result){
      state.proposeSongs = result
    }
  },
  actions: {
    async findSong({ commit }, lyrics) {
      debugger
      const result = await fetch(`https://akinator-docker.herokuapp.com/trackText/text=${lyrics}`)

      const data = await result.json()

      if(data) {
        commit('SET_SONG', data.result[0])
        return data.result[0]
      }
    }
  },
  getters: {
    proposeSongs: state => state.proposeSongs
  }
}