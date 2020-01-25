export default {
    namespaced: true,
    state: {
      user: {}
    },
    mutations: {
      SET_USER(state, result){
        state.user = result
      }
    },
    actions: {
      async doSignUp({ commit}, { username, password}) {
        const user = await fetch(" https://akinator-docker.herokuapp.com/register", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password})
        })

        const data = await user.json()

        if(data) {
          commit('SET_USER', data)

          user.authdata = btoa(username + ':' + password);
          localStorage.setItem('user', JSON.stringify(user));
        }
      },
      async doLogin({ commit }, { username, password}) {
        const headers = new Headers()
        headers.append('Authorization', `Basic ` + btoa(`${username}:${password}`))

        const requstOptions ={
          headers,
          mode: 'no-cors'
        }

        const user = await fetch(`https://akinator-docker.herokuapp.com/test`, requstOptions)

        const data = await user.json()
        if(data) {
          commit('SET_USER', data)
        }
      }
    },
    getters: {
      proposeSongs: state => state.proposeSongs
    }
  }