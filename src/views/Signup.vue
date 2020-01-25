<template>
  <v-card class="mx-auto mt-12" width="80%">
    <v-card-text>
      <h1 class="mb-8">Sign Up</h1>
      <v-text-field label="Your login" v-model="login"></v-text-field>
      <v-text-field label="Password" v-model="password"></v-text-field>
      <div class="d-flex">
        <p class="mr-2">Do you have account?</p>
        <router-link to="/">Login</router-link>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="indigo" @click="doSignUp" dark>
          Sign Up
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: ""
    }
  },
  methods: {
    async doSignUp(){
      // await 
      this.$router.push({ path: '/'})
    }
  }
}
</script>

<style>

</style>