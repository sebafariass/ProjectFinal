import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    razas : [],
    edades : [],
    personas : []
  },
  mutations: {
    GET_DATA_RAZAS(state, razas){
      state.razas = razas
    },
    GET_DATA_EDADES(state, edades){
      state.edades = edades
    },
    GET_DATA_PERSONAS(state, personas){
      state.personas = personas
    }
  },
  actions: {

    agregando_user({ commit }, usuario) {
      try {
        firebase
          .auth()
          .createUserWithEmailAndPassword(usuario.email, usuario.password)
          .then(() => {
            const user = usuario;
            delete user.password;
            firebase
              .firestore()
              .collection("agregaruser")
              .add(usuario);
          });
      } catch (error) {
        console.log("Tienes un error en Usuario: ", error);
      }
    },

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

     async getDataPersonas({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("personas")
          .onSnapshot((snapshot) => {
            let personas = [];
            snapshot.forEach((p) => {
              personas.push({ id: p.id, data: p.data() });
            });
            commit("GET_DATA_PERSONAS", personas);
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

