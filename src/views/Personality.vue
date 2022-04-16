<template>
  <div
    class="font-poppins bg-background-color h-screen text-center p-10 m-auto"
  >
    <div class="m-auto bg-white h-5/6 p-10 rounded-2xl">
      <form>
        <div>
          <p class="font-bold text-orange-300">Question 1 / 5</p>
          <h3 class="font-bold text-2xl mt-4">
            {{ question.question }}
          </h3>
        </div>
        <div class="mt-10">
          Pick an Answer !

          <div class="w-5/6 m-auto pt-10">
            <table class="w-full whitespace-nowrap">
              <tbody>
                <tr
                  tabindex="0"
                  class="focus:outline-none h-16 border border-gray-200 dark:border-gray-600 rounded"
                  :class="{ 'bg-green-100': selected }"
                  v-for="answer in question.answers"
                  :key="answer.id"
                  @click="selectedAnswer(answer.point)"
                >
                  <td>
                    <div class="ml-5">
                      <div
                        class="bg-gray-200 dark:bg-gray-800 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative"
                      >
                        <p>{{ answer.option }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="">
                    <div class="flex items-center pl-5">
                      <p
                        class="text-base font-medium leading-none text-gray-700 dark:text-white mr-2"
                      >
                        {{ answer.answer }}
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
            "
            v-if="index == 4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      question: "",
      questions: JSON.parse(localStorage.getItem("questions")),
      index: 0,
      pointsArray: [0, 0, 0, 0, 0],
      totalPoints: 0,
      selected: false,
    };
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
      const url = `http://localhost:8000/api/v1/submit?point=${parseInt(
        this.totalPoints
      )}`;
      axios
        .post(url)
        .then((res) => {
          // eslint-disable-line no-unused-vars
          console.log(res);
          this.$router.push(`/results/${JSON.stringify(res.data) }`)
        })
        .catch((err) => {
          // eslint-disable-line no-unused-vars
          console.log(err);
        });
    },
  },
  mounted() {
    this.$store.dispatch("getQuestions");
    this.dynamicQuestions();
  },
};
</script>
