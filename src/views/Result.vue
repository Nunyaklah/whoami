<template>
  <div class="py-20 overflow-x-hidden font-poppins">
    <div class="p-4 container m-auto flex flex-col items-center">
      <div
        class="xl:w-80 md:mb-14 xl:mb-0 relative h-auto flex flex-column items-center justify-center"
      >
        <img
          src="@/assets/images/introvert.jpg"
          alt="Envelope with a newsletter"
          role="img"
          class="h-full xl:w-full lg:w-1/2 w-full"
          v-if="personality === 'You are an Introvert!!'"
        />
        <img
          src="@/assets/images/extrovert.jpg"
          alt="Envelope with a newsletter"
          role="img"
          class="h-full xl:w-full lg:w-1/2 w-full"
          v-if="personality === 'You are an Extrovert!!'"
        />
      </div>
      <div class="w-full xl:w-1/2 p-10 text-center">
        <h1
          class="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center md:mt-0 mt-4"
        >
          {{ personality }}
        </h1>
        <p class="text-base leading-normal text-gray-600 text-center">
          Personality is more important than beauty, but imagination is more
          important than both of them.
        </p>
        <div class="mt-12 m-auto text-center">
          <router-link to="/">
            <button
              class="bg-black text-white font-semibold py-4 px-10 rounded ml-4"
            >
              Go to Home
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let personality = ref(JSON.parse(this.$route.params.result));
</script>
