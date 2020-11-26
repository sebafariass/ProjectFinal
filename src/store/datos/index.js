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
/*
    agregarJuguete({commit}, juguete) {
      firebase
      .firestore()
        .collection('juguetes')
        .add(juguete);
    },

    updateJuguete({commit}, juguete) {
      console.log(juguete);
      firebase
      .firestore()
        .collection('juguetes')
        .doc(juguete.id)
        .update(juguete.data);
    },

    deleteJuguete({commit}, id) {
      firebase
      .firestore()
        .collection('juguetes')
        .doc(id)
        .delete(id);
    }, */

    getDataRazas({commit}) {
      firebase
      .firestore()
        .collection('razas')
        .onSnapshot( (snapshot) => {
          let razas = [];
          snapshot.forEach((r) => {
            razas.push({ id: r.id, data: r.data() });
          });
          commit('GET_DATA_RAZAS', razas)
        });
      },
    },
    getters: {
    getJugueteUpdating: (state) => (id) => {
      return state.razas.find(r => r.id === id)
    }

  },
 
  modules: {},
});


