<template>
  <v-app>
    <NavBar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
.akinator {
  width: 135px;
}
</style>