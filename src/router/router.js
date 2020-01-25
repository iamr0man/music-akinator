import Vue from "vue";
import VueRouter from "vue-router";

import Main from '../views/Main.vue'
import Game from '../views/Game.vue'
import Signup from '../views/Signup.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
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
