<template>
  <div
    class="font-poppins container overflow-x-hidden bg-background-color h-screen w-screen text-center pb-8 max-w-none"
  >
    <Navbar />
    <div class="m-auto bg-white p-4 md:p-20 lg:p-20 rounded-3xl mt-10 w-5/6">
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
              :class="{ 'bg-green-50 border-green-300': answer.selected }"
              v-for="(answer, index) in question.answers"
              :key="answer.id"
              @click="
                questionsStore.selectedAnswer(answer.point);
                questionsStore.markAsSelected(index);
              "
            >
              <div class="ml-5">
                <div
                  class="bg-gray-200 rounded-sm w-5 h-5 flex justify-center"
                  :class="{
                    'bg-green-300': answer.selected,
                    'text-white': answer.selected,
                  }"
                >
                  <p data-cy="answer-option">{{ answer.option }}</p>
                </div>
              </div>

              <div class="pl-5" data-cy="answer-select">
                <p class="font-medium text-gray-700 mr-2">
                  {{ answer.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <button
            class="bg-gray-200 text-black font-semibold py-4 px-10 rounded mb-3"
            data-cy="previous-btn"
            @click.prevent="questionsStore.decreaseIndex()"
          >
            Previous
          </button>

          <button
            class="bg-black text-white font-semibold py-4 px-10 rounded ml-4"
            data-cy="next-btn"
            @click.prevent="questionsStore.increaseIndex()"
            v-if="index != 4"
          >
            Next
          </button>

          <button
            class="bg-black text-white font-semibold py-4 px-10 rounded ml-4"
            data-cy="submit-btn"
            @click.prevent="questionsStore.submit()"
            v-if="index == 4"
          >
          <Spinner v-if="loading" />
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { usePersonalityStore } from "../stores/personality";
import { storeToRefs } from "pinia";
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/Spinner.vue";

// create store
const questionsStore = usePersonalityStore();

// creating store refs
const { question, index, loading, fullPage } = storeToRefs(questionsStore);


//fetch the questions from api
questionsStore.getQuestions();
</script>
