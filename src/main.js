import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'
import axios from "axios";
// import "vue-loading-overlay/dist/vue-loading.css";
import Vue3Transitions from 'vue3-transitions'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";



const app = createApp(App)
const pinia = createPinia()



app.use(pinia)
app.use(router,axios,Vue3Transitions)
app.use(Toast)




app.mount('#app')
