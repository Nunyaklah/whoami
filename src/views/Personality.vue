<template>
  <div
    class="font-poppins bg-background-color h-screen w-screen text-center p-10 m-auto"
  >
    <div class="m-auto bg-white p-10 rounded-2xl">
      <form>
        <div>
          <p class="font-bold text-xl text-yellow-400">
            Question {{ index + 1 }} / 5
          </p>
          <h3 class="font-bold text-2xl mt-4">
            {{ question.question }}
          </h3>
        </div>
        <div class="mt-10">
          Pick an Answer !
        <Transition name="slide-fade">
          <div class="w-full m-auto pt-10">
            <div
              class="w-full whitespace-nowrap h-16 border container border-gray-200 rounded mb-4 flex items-center flex-wrap"
              :class="{ 'bg-green-50 border-green-300': answer.selected }"
              v-for="(answer, index) in question.answers"
              :key="answer.id"
              @click="
                selectedAnswer(answer.point);
                markAsSelected(index);
              "
            >
              <div class="ml-5">
                <div
                  class="bg-gray-200 dark:bg-gray-800 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative"
                  :class="{
                    'bg-green-300': answer.selected,
                    'text-white': answer.selected,
                  }"
                >
                  <p>{{ answer.option }}</p>
                </div>
              </div>

              <div class="flex pl-5 break-words">
                <p class="font-medium text-gray-700 mr-2">
                  {{ answer.answer }}
                </p>
              </div>
            </div>
          </div>
        </Transition>  
        </div>

        <div class="mt-8">
          <button
            class="bg-gray-200 text-black font-semibold py-4 px-10 rounded"
            @click.prevent="decreaseIndex()"
          >
            Previous
          </button>

          <button
            class="bg-black text-white font-semibold py-4 px-10 rounded ml-4"
            @click.prevent="increaseIndex()"
            v-if="index != 4"
          >
            Next
          </button>

          <button
            class="bg-black text-white font-semibold py-4 px-10 rounded ml-4"
            @click.prevent="
              calculatePoints();
              postPoints();
              isLoading = true;
            "
            v-if="index == 4"
          >
            Submit
          </button>
        </div>
      </form>
      <div class="vld-parent">
        <loading
          v-model:active="isLoading"
          :can-cancel="true"
          :on-cancel="onCancel"
          :is-full-page="fullPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loading from "vue-loading-overlay";


export default {
  data() {
    return {
      question: "",
      questions: JSON.parse(localStorage.getItem("questions")),
      index: 0,
      pointsArray: [0, 0, 0, 0, 0],
      totalPoints: 0,
      selected: false,
      isLoading: false,
      fullPage: true,
    };
  },
  components: {
    Loading,
  },
  methods: {
    dynamicQuestions() {
      this.question = this.questions[this.index];
    },
    increaseIndex() {
      if (this.index < 4) {
        this.index += 1;
      }
      this.dynamicQuestions();
    },
    decreaseIndex() {
      if (this.index > 0) {
        this.index -= 1;
      }
      this.dynamicQuestions();
    },
    selectedAnswer(point) {
      this.pointsArray[this.index] = point;
    },
    calculatePoints() {
      this.totalPoints = this.pointsArray.reduce(function (
        previousValue,
        currentValue
      ) {
        return previousValue + currentValue;
      });
    },
    postPoints() {
      const url = `${process.env.VUE_APP_BASE_URL}/submit?point=${parseInt(
        this.totalPoints
      )}`;
      axios
        .post(url)
        .then((res) => {
          // eslint-disable-line no-unused-vars
          console.log(res);
          setTimeout(() => {
            this.$router.push(`/results/${JSON.stringify(res.data)}`);
          }, 3000);
        })
        .catch((err) => {
          // eslint-disable-line no-unused-vars
          console.log(err);
        });
    },
    markAsSelected(index) {
      this.question.answers[index].selected = true;
    },
  },
  mounted() {
    this.$store.dispatch("getQuestions");
    this.dynamicQuestions();
  },
};
</script>

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
