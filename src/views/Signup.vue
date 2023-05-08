<template>
  <section class="bg-background-color">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-bold text-gray-900"
      >
        Personality Test
      </a>
      <div
        class="w-full bg-line-color rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
          >
            Sign Up for your account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="firstname"
                class="block mb-2 text-sm font-medium text-gray-900"
                >First Name</label
              >
              <input
                type="text"
                name="firstname"
                v-model="firstname"
                id="firstname"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Kofi"
              />
            </div>
            <div>
              <label
                for="lastname"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Last Name</label
              >
              <input
                type="text"
                name="lastname"
                v-model="lastname"
                id="lastname"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Wisdor"
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                v-model="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="name@mail.com"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Password</label
              >
              <input
                type="password"
                name="password"
                v-model="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              />
            </div>

            <button
              type="submit"
              class="w-full text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              @click.prevent="signup"
            >
              Sign up
            </button>
            <p class="text-sm font-semibold text-gray-700">
              Already have an account?
              <a href="/login" class="font-medium text-gray-900 hover:underline"
                >Sign In</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

// create store
const authStore = useAuthStore();

let firstname = ref("");
let lastname = ref("");
let email = ref("");
let password = ref("");

function signup() {
    authStore.signup(firstname.value,lastname.value,email.value,password.value)
}
</script>
