import { defineStore } from "pinia";
import axios from "axios";
import router from "../router/index";
import { useAlertStore } from "./alerts";
const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const usePersonalityStore = defineStore("personalityStore", {
  state: () => ({
    index: 0,
    question: "",
    questions: [],
    pointsArray: [0,0,0,0],
    totalPoints: 0,
    selected: false,
    loading: null,
    fullPage: true,
  }),
  actions: {
    submit() {
      this.loading = true;
      setTimeout(() => {
        this.calculatePoints();
      }, 4000);
    },

    //fetch all questions from the api
    async getQuestions() {
      try {
        const response = await axios.get(`${baseUrl}/questions`);
        this.questions = response.data;
        this.question = this.questions[this.index];
        this.pointsArray = new Array(this.questions.length).fill(0)
      } catch (error) {
        const alertStore = useAlertStore();
        alertStore.error(error.response.data);
      }
    },

    // cycles through the questions based on index position
    dynamicQuestions() {
      this.question = this.questions[this.index];
    },

    // increases index and calls dynamic question
    increaseIndex() {
      if (this.index < this.questions.length) {
        console.log(this.questions.length)
        this.index += 1;
      }
      this.dynamicQuestions();
    },
    // decreasesindex and calls dynamic question
    decreaseIndex() {
      if (this.index > 0) {
        this.index -= 1;
      }
      this.dynamicQuestions();
    },
    // determines which answer was selected according to its index, gets the point and pushes puts that in the pointsArray
    selectedAnswer(point) {
      this.pointsArray[this.index] = point;
    },
    // marks a particular question as selected. Adds a new key selected to the question object and gives it a value tru/flase dependding on
    // how the user clicks.
    markAsSelected(index) {
      for (let answer of this.question.answers) {
        if (answer.selected === true) {
          answer.selected = false;
        }
      }
      this.question.answers[index].selected = true;
    },
    // calcuates total points by summing up values in points array
    calculatePoints() {
      this.totalPoints = this.pointsArray.reduce(function (
        previousValue,
        currentValue
      ) {
        return previousValue + currentValue;
      });
      this.loading = false;
      router.push("/results");
    },
  },
});
