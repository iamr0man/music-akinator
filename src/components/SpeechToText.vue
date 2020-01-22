<template>
    <div>
        <div class="speech-to-text__button-container" @click="isSpeaking = !isSpeaking">
                <img v-if="!isSpeaking" :src="micImage" @click="mediaRecorder.start()">
                <img v-else
                    class="speech-to-text__stop" :src="stopImage" @click="mediaRecorder.stop()">
            </div>
    </div>
</template>

<script>
import micImage from '../assets/mic.svg';
import stopImage from '../assets/stop.svg';
/*
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
*/
export default {
    name: 'SpeechToText',
    data() {
        return {
            isSpeaking: false,
            stream: null,
            mediaRecorder: null,
            audioChunks: [],
            micImage,
            stopImage,
        };
    },
    created(){
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                this.mediaRecorder = new MediaRecorder(stream)

                let audioChunks = []
                this.mediaRecorder.addEventListener("dataavailable",function(event) {
                    audioChunks.push(event.data);
                });
                
                this.mediaRecorder.addEventListener("stop", function() {
                    const audioBlob = new Blob(audioChunks, {
                        type: 'audio/wav'
                    });

                    let fd = new FormData();
                    fd.append('voice', audioBlob);
                    
                    await fetch('', {
                        method:"",
                        headers: "",
                        body: fd
                    })

                    console.log(audioChunks)
                    audioChunks = [];
                });
            })
    },
    methods: {
        // eslint-disable-next-line no-unused-vars
        sendVoice(fd) {
            console.log('work')
            console.log(fd)
        }
    }
};
</script>

<style lang="sass">

@keyframes blind
    0%
        background-color: #dddddd
        width: 45px
        height: 45px
    50%
        background-color: white
        width: 50px
        height: 50px
.speech-to-text
    &__button-container
        display: flex
        justify-content: center
        align-items: center
    &__button
        box-shadow: 1px 2px 3px
        background-color: #FFFFFF
        border-radius: 50px
        width: 50px
        height: 50px
        display: flex
        justify-content: center
        align-items: center
        cursor: pointer
        &--speaking
            animation-name: blind
            animation-duration: 1.5s
            animation-iteration-count: 1
    &__stop
        width: 16px
</style>