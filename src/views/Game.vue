<template>
  <v-card class="d-flex flex-column align-center">
    <v-card-text v-if="!result">
      <p>Unfortunately, no result for your lyrics</p>
    </v-card-text>
    <v-card-text class="song-block" v-else>
      <h2>{{ result.artist }}</h2>
      <h4>{{ result.title }}</h4>
      <LazyYoutubeVideo v-show="expand" :src="result.link"/>
    </v-card-text>
    <v-card-actions>
      <v-btn
          color="indigo"
          dark
          @click="expand = !expand"
        >
          <v-icon>mdi-play</v-icon>
        </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
import 'vue-lazy-youtube-video/dist/style.css'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'

export default {
  components:{
    LazyYoutubeVideo
  },
  props: {
    result: {
      type: Object,
      required: true
    }
  },
  data(){
    return{
      expand: false
    }
  },
}
</script>

<style>
  .song-block {

  }
</style>