import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    razas : [],
    edades : [],
    personas : [],
    trueques: []
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
    },
    GET_DATA_TRUEQUES(state, trueques){
      state.trueques = trueques
    }
  },
  actions: {

    async getDataTrueques({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("trueques")
          .onSnapshot((snapshot) => {
            let trueques = [];
            snapshot.forEach((p) => {
              trueques.push({ id: p.id, data: p.data() });
            });
            commit("GET_DATA_TRUEQUES", trueques);
          });
      } catch (error) {
        console.log("error:", error);
      }
    },


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
    agregar_trueques({ commit }, tienda) {
      firebase
        .firestore()
        .collection("trueques")
        .add(tienda);
    },
    update_trueque({ commit }, tienda) {
      firebase
        .firestore()
        .collection("trueques")
        .doc(tienda.id)
        .update(tienda.data);
    },
    eliminar_trueque({ commit }, id) {
      firebase
        .firestore()
        .collection("trueques")
        .doc(id)
        .delete();
    },

    },


    getters: {
    getTiendaUpdating: (state) => (id) => {
      return state.trueques.find(r => r.id === id)
    }

  },
 
  modules: {},
});

