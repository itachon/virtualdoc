import { createApp } from 'vue';
import App from './app.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './routes/router.ts'
import axiosDefault from './axios/axios.ts'


createApp(App)
    // .use(VeeValidate)
    .use(VueAxios, axios)
    .use(router)
    .use(axiosDefault)
    .mount('#app')