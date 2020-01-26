<template>
  <v-card class="d-flex flex-column align-center">
    <v-card-text class="text-center">
      <h1>Congratulations our winner!</h1>
      <h2 class="mt-12">Winner is - {{ winner }}</h2>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('winner', ['winner'])
  }
}
</script>

<style>

</style>