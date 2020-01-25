import Vue from "vue";
import VueRouter from "vue-router";

import Main from '../views/Main.vue'
import Game from '../views/Game.vue'
import Signup from '../views/Signup.vue'
import Unauthorized from '../views/Unauthorized.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: "/main",
    name: "main",
    component: Main
  },
  {
    path: "/unauthorized",
    name: "unauthorized",
    component: Unauthorized
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

//eslint-disable-next-line
// router.beforeEach((to, from, next) => {
//   debugger
//   const user = store.getters["user/user"];
//   if(!user){
//     next({path: '/signup', name: 'signup'})
//   }
//   else {
//     next()
//   }
// })

export default router;
