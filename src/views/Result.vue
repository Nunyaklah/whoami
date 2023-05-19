<template>
  <div class="py-20 overflow-x-hidden font-poppins">
    <div class="p-2 container m-auto flex flex-col items-center bg-background-color rounded-3xl">
      <div
        class="xl:w-[500px] md:mb-14 xl:mb-0 relative h-auto flex flex-column items-center justify-center"
      >
     
        <img
          src="@/assets/images/resultpic.png"
          alt="Envelope with a newsletter"
          role="img"
          class="h-full xl:w-full lg:w-1/2 w-full"
        />
      </div>
      <Quote
        :quote="quote"
        :quoteAuthor="quoteAuthor"
        :quoterPosition="quoterPosition"
      />
      <ConfettiExplosion :particleCount="600" :duration="4000"/>
      <div class="w-full xl:w-1/2 p-10 text-center">
        <h1
          class="text-5xl font-bold italic leading-10 text-gray-800 mb-8 text-center md:mt-0 mt-4"
        >
          {{ result[0].personality }}
        </h1>

        <p
          class="mb-3 text-gray-500  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900  first-letter:mr-3 first-letter:float-left"
        >
        {{ result[0].personalityDetails }}
        </p>
        

        
        <div class="mt-12 m-auto text-center">
          <router-link to="/">
            <button
              class="bg-black text-white font-semibold py-4 px-10 rounded ml-4"
              data-cy="home-btn"
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
import { useResultStore } from "../stores/result";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import Quote from "../components/Quote.vue";
import ConfettiExplosion from "vue-confetti-explosion";



// create store
const resultStore = useResultStore();

// creating store refs
const { result } = storeToRefs(resultStore);

//fetch results from results store
resultStore.getResults();

const quote =
  "Personality is more important than beauty, but imagination is more than both of them.";
const quoteAuthor = "Nunya Klah";
const quoterPosition = "Senior Frontend Engineer";


</script>
