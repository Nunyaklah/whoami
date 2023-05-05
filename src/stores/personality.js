import { defineStore } from "pinia";
import axios from "axios";
import router from "../router/index";

export const usePersonalityStore = defineStore("personalityStore", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    index: 0,
    question: "",
    questions: [],
    pointsArray: [0, 0, 0, 0, 0],
    totalPoints: 0,
    selected: false,
    loading: false,
    fullPage: true,
  }),
  actions: {
    //fetch all questions from the api
    getQuestions() {
      return new Promise((resovle, reject) => {
        axios({
          url: `${this.baseUrl}/questions`,
          method: "GET",
        })
          .then((resp) => {
            this.questions = resp.data;
            this.question = this.questions[this.index];
            resovle(resp);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },

    // cycles through the questions based on index position
    dynamicQuestions() {
      this.question = this.questions[this.index];
    },

    // increases index and calls dynamic question
    increaseIndex() {
      if (this.index < 4) {
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
      router.push("/results")
    },
  },
});
