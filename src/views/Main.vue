<template>
  <div class="">
    <LyricsInput v-if="!lyricsType"/>
    <v-card width="1000" v-else>
      <v-row>
        <v-col cols="5" class="mx-auto">
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
.akinator {
  width: 135px;
}
</style>