<template>
  <div
    class="font-poppins container overflow-x-hidden bg-background-color h-screen w-screen text-center p-4 max-w-none"
  >
    <div class="m-auto bg-white p-4 md:p-20 lg:p-20 rounded-2xl">
      <form>
        <div>
          <p class="font-bold text-xl text-yellow-400">
            Question {{ index + 1 }} / 5
          </p>
          <h3 class="font-bold text-2xl mt-4 w-full md:w-3/5 m-auto">
            {{ question.question }}
          </h3>
        </div>
        <div class="mt-10">
          Pick an Answer !

          <div class="w-full m-auto pt-10">
            <div
              class="w-full md:w-3/5 m-auto h-full p-4 md:h-16 border container border-gray-200 rounded mb-4 flex items-center"
            >
              <div class="ml-5">
                <div
                  class="bg-gray-200 dark:bg-gray-800 rounded-sm w-5 h-5 flex justify-center"
                  
                >
                  <p>A</p>
                </div>
              </div>

              <div class="pl-5">
                <p class="font-medium text-gray-700 mr-2">
                  Think its more important to give them some of your time; work can wait
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <button
            class="bg-gray-200 text-black font-semibold py-4 px-10 rounded mb-3"
           
          >
            Previous
          </button>

          <button
            class="bg-black text-white font-semibold py-4 px-10 rounded ml-4"
          >
            Next
          </button>

          <button
            class="bg-black text-white font-semibold py-4 px-10 rounded ml-4"
          >
            Submit
          </button>
        </div>
      </form>
      <!-- <div class="vld-parent">
        <loading
          v-model:active="isLoading"
          :can-cancel="true"
          :on-cancel="onCancel"
          :is-full-page="fullPage"
        />
      </div> -->
    </div>
  </div>
</template>

<script setup>
// import Loading from "vue-loading-overlay";

import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import {usePersonalityStore} from '../stores/personality'

// create store
const questionsStore = usePersonalityStore()

// creating store refs
const {question, index} = storeToRefs(questionsStore)

//fetch the questions from api
questionsStore.getQuestions()






</script>
