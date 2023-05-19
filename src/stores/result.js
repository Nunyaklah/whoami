import { defineStore } from "pinia";
import axios from "axios";
import { usePersonalityStore } from "../stores/personality";
import { useAlertStore } from "./alerts";
const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useResultStore = defineStore("resultStore", {
  state: () => ({
    results: [],
    personality: "",
    personalityDetails: "",
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
        let data =  this.results.filter((result) => result.id == 2);
        this.personality = data[0].personality
        this.personalityDetails = data[0].personalityDetails
      } else {
        let data = this.results.filter((result) => result.id == 1);
        this.personality = data[0].personality
        this.personalityDetails = data[0].personalityDetails
      }
    }, 
  },
});
