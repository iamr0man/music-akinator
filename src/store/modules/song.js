import { authHeader } from "../../services/auth-header";

export default {
  namespaced: true,
  state: {
    proposeSong: {
      artist: 'Travis Scott',
      title: 'Nightclawer',
      link: 'https://www.youtube.com/watch?v=JPY6lQjokYs'
    }
  },
  mutations: {
    SET_SONG(state, result){
      state.proposeSong = result
    }
  },
  actions: {
    async findSong({ commit }, lyrics) {
      const headers = new Headers()
      headers.append('Authorization', authHeader())

      const requestOptions = {
        headers,
        mode:"no-cors"
      }

      const result = await fetch(`https://akinator-docker.herokuapp.com/trackText/text=${lyrics}`,requestOptions)

      const data = await result.json()

      if(data) {
        commit('SET_SONG', data.result[0])
      }
    }
  },
  getters: {
    proposeSong: state => state.proposeSongs
  }
}