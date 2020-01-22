<template>
  <v-app>
    <div class="container">
      <v-card width="1000">
        <v-row>
          <v-col cols="5" class="mx-auto">
            <img src="./assets/drake.jpg" class="akinator" alt="drake">
            <SpeechToText class="app__stt-button" />
            <v-text-field label="Your text"></v-text-field>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import SpeechToText from './components/SpeechToText.vue';
export default {
  name: "App",

  components: {
    SpeechToText
  },

  data() {
    return {
    }
  },
};
</script>

<style lang="scss">
.akinator {
  width: 135px;
}
</style>