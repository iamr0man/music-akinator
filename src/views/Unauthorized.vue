<template>
    <v-card class="mx-auto mt-12" width="60%">
        <v-card-text>
            <h1 class="mb-8">Login</h1>
            <v-text-field label="Login" v-model="login" />
            <v-text-field label="Password" v-model="password" />
            <div class="d-flex flex-column">
                <p class="mr-2"><router-link to="/">Create Account</router-link> instead?</p>
            </div>
        </v-card-text>
        <v-card-actions>
            <v-btn dark color="indigo" @click="doLogin({login, password})">Login</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions} from 'vuex'
export default {
    data(){
        return {
            login: "",
            password: ""
        }
    },
    methods: {
        ...mapActions('user', ['doLogin'])
    }
}

</script>

<style>

</style>