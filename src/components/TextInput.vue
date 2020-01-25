<template>
  <div class="wrapper">
    <v-text-field label="Your text" v-model="lyrics"></v-text-field>
    <v-btn class="ma-2" color="indigo" dark v-show="lyrics" @click="findSong(lyrics)">?Propose?</v-btn>  
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data(){
    return {
      lyrics: ''
    }
  },
  methods: {
    ...mapActions('song',["findSong"])
  }
}
</script>

<style>

</style>