import { defineStore } from "pinia";
import axios from "axios";
import router from "../router/index";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    token: window.localStorage.getItem("token"),
  }),
  actions: {
    login(email, password) {
      axios
        .post(`${this.baseUrl}/login`, {
          email,
          password,
        })
        .then(function (response) {
          localStorage.setItem("token", response.data.accessToken);
          router.push("/");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    signup(firstname, lastname, email, password) {
      axios
        .post(`${this.baseUrl}/signup`, {
          firstname,
          lastname,
          email,
          password,
        })
        .then(function (response) {
          console.log(response);
          router.push("/login");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    logout() {
      this.token = null
      window.localStorage.removeItem("token");
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
});
