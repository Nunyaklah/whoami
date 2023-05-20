import { defineStore } from "pinia";
import axios from "axios";
import router from "../router/index";
import { useAlertStore } from "./alerts";

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    token: window.localStorage.getItem("token"),
    loading: null,
    firstname: window.localStorage.getItem("firstname"),
    lastname: window.localStorage.getItem("lastname"),
  }),
  actions: {
    async login(email, password) {
      this.loading = true;
      const alertStore = useAlertStore();
      try {
        const response = await axios.post(`${baseUrl}/login`, {
          email,
          password,
        });
        this.token = response.data.accessToken;
        this.firstname = response.data.user.firstname;
        this.lastname = response.data.user.lastname;
        localStorage.setItem("firstname", response.data.user.firstname);
        localStorage.setItem("lastname", response.data.user.lastname);
        localStorage.setItem("token", response.data.accessToken);
        router.push("/");
        alertStore.success("Logged in successfully");
        this.loading = false;
      } catch (error) {
        alertStore.error(error.response.data);
        this.loading = false;
      }
    },

    async signup(firstname, lastname, email, password) {
      this.loading = true;
      const alertStore = useAlertStore();
      try {
        const response = await axios.post(`${baseUrl}/signup`, {
          firstname,
          lastname,
          email,
          password,
        });
        console.log(response);
        router.push("/login");
        alertStore.success("Registered successfully");
        this.loading = false;
      } catch (error) {
        alertStore.error(error.response.data);
        this.loading = false;
      }
    },
    logout() {
      this.token = null;
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("firstname");
      window.localStorage.removeItem("lastname");
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
});
