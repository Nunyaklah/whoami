import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    questions: ""
  },
  mutations: {
    questions(state, payload){
      state.questions = payload
    }
  },
  actions: {
    getQuestions({commit}){
      return new Promise((resolve, reject) => {
        axios({
          url: `http://localhost:8000/api/v1/questions`,
          method: 'GET'
        })
        .then((resp)=>{
          const questions = resp.data
          localStorage.setItem("questions", JSON.stringify(questions))
          commit("questions", questions);
          resolve(resp)
        })
        .catch((err)=>{
          reject(err);
          console.log(err)
        })
      })
    }
  },
  modules: {
  }
})
