<template>
    <div class="layout">
      <div class="d-flex flex-column justify-center align-center squared" tile>
        <p>Choose input type:</p>
        <div class="d-flex justify-center align-center full-width">
          <v-btn
            text
            icon
            color="indigo"
            :x-large="true"
            @click="changeLyricsType('micro')"
            ><v-icon>mdi-microphone</v-icon></v-btn
          >
          <v-btn
            text
            icon
            color="indigo"
            :x-large="true"
            @click="changeLyricsType('keyboard')"
            ><v-icon>mdi-keyboard</v-icon></v-btn
          >
        </div>
      <p class="gray mt-12">
        <v-icon>mdi-alert-octagon</v-icon>Mirco record english speech
      </p>      
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex' 
export default {
  data() {
    return {
      speechInput: ''
    }
  },
  methods: {
    ...mapActions('lyrics', ["changeLyricsType"])
  }
}
</script>

<style>
.squared {
  width: 100%;
}

.gray {
  color: #757575;
}
</style>