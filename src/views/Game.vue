<template>
  <v-card class="d-flex flex-column align-center">
    <v-card-text v-if="!Object.entries(proposeSong).length === 0">
      <p>Unfortunately, no result for your lyrics</p>
    </v-card-text>
    <v-card-text class="song-block" v-else>
      <h2>{{ proposeSong.artist }}</h2>
      <h4>{{ proposeSong.title }}</h4>
      <LazyYoutubeVideo v-show="expand" src='https://www.youtube.com/embed/rNr6X0_vmWM'/>
    </v-card-text>
    <v-card-actions>
      <v-btn
          color="indigo"
          dark
        >
          <v-icon>mdi-check-circle-outline</v-icon>
        </v-btn>
      <v-btn
          color="indigo"
          dark
          @click="expand = !expand"
        >
          <v-icon>mdi-play</v-icon>
        </v-btn>
      <v-btn
          color="indigo"
          dark
        >
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
import 'vue-lazy-youtube-video/dist/style.css'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'
import { mapState } from 'vuex'

export default {
  components:{
    LazyYoutubeVideo
  },
  data(){
    return{
      expand: false
    }
  },
  computed: {
    ...mapState('song',["proposeSong"])
  }
}
</script>

<style>
  .song-block {

  }
</style>