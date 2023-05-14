import { defineStore } from "pinia";
import axios from "axios";
import { usePersonalityStore } from "../stores/personality";
import { useAlertStore } from "./alerts";
const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useResultStore = defineStore("resultStore", {
  state: () => ({
    results: [],
    result: "",
    loading: false,
  }),
  actions: {
    // function to get details based on results
    async getResults() {
      try {
        const response = await axios.get(`${baseUrl}/results`);
        this.results = response.data;
        this.finalResults();
      } catch (error) {
        const alertStore = useAlertStore();
        alertStore.error(error.response.data);
      }
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
