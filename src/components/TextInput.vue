<template>
  <div class="wrapper">
    <v-text-field label="Your text" v-model="lyrics"></v-text-field>
    <v-btn class="ma-2" color="indigo" dark v-show="lyrics">?Propose?</v-btn>  
  </div>
</template>

<script>
export default {
  data(){
    return {
      lyrics: ''
    }
  }
}
</script>

<style>

</style>