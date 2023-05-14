import { defineStore } from "pinia";
import axios from "axios";
import router from "../router/index";
import { useAlertStore } from "./alerts";

const baseUrl = `${import.meta.env.VITE_API_URL}`;


export const useAuthStore = defineStore("authStore", {
  state: () => ({
    token: window.localStorage.getItem("token"),
    loading: null
  }),
  actions: {
    async login(email, password) {
      this.loading = true
      try {
        const response = await axios.post(`${baseUrl}/login`, {
          email,
          password,
        });
        localStorage.setItem("token", response.data.accessToken);
        router.push("/");
        this.loading = false
      } catch (error) {
        const alertStore = useAlertStore();
        alertStore.error(error.response.data);
        this.loading = false
      }
    },

    async signup(firstname, lastname, email, password) {
      this.loading = true
      try {
        const response = await axios.post(`${baseUrl}/login`, {
          firstname,
          lastname,
          email,
          password,
        });
        console.log(response);
        router.push("/login");
        this.loading = false
      } catch (error) {
        const alertStore = useAlertStore();
        alertStore.error(error.response.data);
        this.loading = false
      }
    },
    logout() {
      this.token = null;
      window.localStorage.removeItem("token");
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
});
