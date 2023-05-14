import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

const toast = useToast();

export const useAlertStore = defineStore("alertStore",{
  actions: {
    success(message) {
      toast.success(message);
    },
    error(message) {
      toast.error(message);
    },
  },
});
