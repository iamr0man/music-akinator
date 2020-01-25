<template>
  <v-card class="mx-auto mt-12" width="60%">
    <v-card-text>
      <h1 class="mb-8">Sign Up</h1>
      <v-text-field label="Your login" v-model="username"></v-text-field>
      <v-text-field label="Password" v-model="password"></v-text-field>
      <div class="d-flex">
        <p class="mr-2">Do you have account?</p>
        <router-link to="/unauthorized">Login</router-link>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="indigo" @click="signUp" dark>
          Sign Up
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import router from '../router/router'
export default {
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    ...mapActions('user', ["doSignUp"]),
    async signUp(){
      await this.doSignUp({ username: this.username, password: this.password })
      router.push('/main')
    }
  },
}
</script>

<style>

</style>