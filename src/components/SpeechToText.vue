<template>
    <div>
        <div class="d-flex flex-column align-center">
          <p>Your song text:</p>
          <p>{{ this.speech }}</p>
          <v-btn @click="recordSpeech()" color="indigo" dark text
            >Sing again</v-btn>
        </div>
        <v-btn class="ma-2" color="indigo" dark v-show="speech" @click="findSong(speech)">?Propose?</v-btn>
        <router-link to="/game">gamebeta</router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'SpeechToText',
    data() {
        return {
            speech: '',
            isSpeaking: false,
            recognitionEngine: null
        };
    },
    mounted() {
        window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

        this.recognitionEngine = new window.SpeechRecognition();
        // this.resetSuggestedAnswers();
    },
    methods: {
        ...mapActions('song',['findSong']),
        recordSpeech() {
            this.recognitionEngine.interimResults = true;
            this.recognitionEngine.lang = this.speechLang;
            this.recognitionEngine.addEventListener("result", e => {
                this.speech = e.results[0][0].transcript;
            });
            this.recognitionEngine.start();
        },
    },
    computed: {
        ...mapGetters('lyrics',['lyricsType',"proposeSongs"])
    }
};
</script>

<style lang="sass">
</style>