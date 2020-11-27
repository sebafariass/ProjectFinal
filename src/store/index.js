import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    razas : [],
    edades : []
  },
  mutations: {
    GET_DATA_RAZAS(state, razas){
      state.razas = razas
    },
    GET_DATA_EDADES(state, edades){
      state.edades = edades
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
    async getDataEdades({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("edades")
          .onSnapshot((snapshot) => {
            let edades = [];
            snapshot.forEach((p) => {
              edades.push({ id: p.id, data: p.data() });
            });
            commit("GET_DATA_EDADES", edades);
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

