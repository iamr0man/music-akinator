export default {
  namespaced: true,
  state: {
    winner: {}
  },
  mutations: {
    SET_WINNER(state, result){
      state.winner = result
    }
  },
  actions: {
    setWinner({ commit, }, winner){
      debugger
      commit('SET_WINNER', winner.winner)
    }
  },
  getters: {
    winner: state => state.winner
  }
}