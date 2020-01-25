import Vue from "vue";
import VueRouter from "vue-router";

import store from '../store/index'

import Main from '../views/Main.vue'
import Game from '../views/Game.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/akinator',
    name: 'Game',
    component: Game,
    props: true,
    beforeEnter(to, from, next){
      store
        .dispatch("song/findSong", to.params.lyrics)
        .then(result => {
          to.params.result = result
          next()
        })
        .catch(error => {
          if(error.response && error.response.status === 404) {
            next({ name:"404"})
          }
        })
    }
  },
  {
    path: "/404",
    name: "404",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
