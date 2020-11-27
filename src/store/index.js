import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    razas : []
  },
  mutations: {
    GET_DATA_RAZAS(state, razas){
      state.razas = razas
    }
  },
  actions: {

    async getDataRazas({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("razas")
          .onSnapshot((snapshot) => {
            let razas = [];
            snapshot.forEach((p) => {
              razas.push({ id: p.id, data: p.data() });
            });
            commit("GET_DATA_RAZAS", razas);
          });
      } catch (error) {
        console.log("error:", error);
      }
    },

    },


  //   getters: {
  //   getJugueteUpdating: (state) => (id) => {
  //     return state.razas.find(r => r.id === id)
  //   }

  // },
 
  modules: {},
});

