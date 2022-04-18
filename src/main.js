import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import "./assets/tailwind.css";
import axios from "axios";
import "vue-loading-overlay/dist/vue-loading.css";
import Vue3Transitions from 'vue3-transitions'

createApp(App).use(store).use(router, axios, Vue3Transitions).mount("#app");
