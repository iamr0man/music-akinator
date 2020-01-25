<template>
  <div class="d-flex juctify-center align-center height">
    <LyricsInput v-if="!lyricsType"/>
    <v-card class="mx-auto" width="80%" color="#F5F5F5" v-else>
      <v-row>
        <v-col cols="5" class="mx-auto d-flex flex-column align-center">
          <img src="../assets/drake.jpg" class="akinator" alt="drake">
            <SpeechToText v-if="lyricsType === 'micro'"/>
            <TextInput v-else/>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import SpeechToText from '../components/SpeechToText.vue';
import LyricsInput from '../components/LyricsInput.vue';
import TextInput from '../components/TextInput.vue';

import { mapGetters } from 'vuex';
export default {
  name: "Main",

  components: {
    SpeechToText,
    LyricsInput,
    TextInput
  },

  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('lyrics', ['lyricsType'])
  }
};
</script>

<style lang="scss">
.height {
  height: 100vh;
}
.akinator {
  width: 135px;
}
</style>