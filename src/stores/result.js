import { defineStore } from "pinia";
import axios from "axios";
import { usePersonalityStore } from "../stores/personality";

export const useResultStore = defineStore("resultStore", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    results: [],
    result: "",
    loading: false,
  }),
  actions: {
    // function to get details based on results
    getResults() {
      return new Promise((resovle, reject) => {
        axios({
          url: `${this.baseUrl}/results`,
          method: "GET",
        })
          .then((resp) => {
            this.results = resp.data;
            this.finalResults();

            resovle(resp);
          })
          .catch((err) => {
            console.log(err);

            reject(err);
          });
      });
    },
    // function to tell if someone is an introvert or an extrovert
    finalResults() {
      const totalPoints = usePersonalityStore().totalPoints;
      console.log(totalPoints);

      if (totalPoints > 5) {
        this.result = this.results.filter((result) => result.id == 2);
      } else {
        this.result = this.results.filter((result) => result.id == 1);
      }
    },
  },
});
