<template>
  <nav class="bg-line-color border-gray-200">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link to="/" class="flex items-center">
        <img
          class="w-16 h-16 mr-2"
          src="../assets/images/logo.png"
          alt="logo"
        />
        <span
          class="self-center text-2xl font-bold whitespace-nowrap text-black"
          >Personality Test</span
        >
      </router-link>

      <div class="flex md:order-2">
        <p
          class="self-center text-2xl font-semibold whitespace-nowrap mr-14 italic"
        >
          Welcome, {{ authStore.firstname + " " + authStore.lastname }}
        </p>
        <button
          type="button"
          class="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm px-10 py-4 text-center mr-3 md:mr-0"
          @click.prevent="logout"
          v-if="loginStatus"
        >
          Logout 🥲😭
        </button>
        <button
          type="button"
          class="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm px-10 py-4 text-center mr-3 md:mr-0"
          @click.prevent="login"
          v-else
        >
          Login 🥰🤩
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";
import { computed, ref } from "vue";
import router from "../router/index";

// create store
const authStore = useAuthStore();

const loginStatus = computed(() => {
  return authStore.isLoggedIn
});

// let loginStatus = ref(authStore.isLoggedIn);

function logout() {
  authStore.logout();
  router.push("/login");
}

function login() {
  router.push("/login");
}
</script>
