import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juguetes : []
  },
  mutations: {
    GET_DATA_JUGUETES(state, juguetes){
      state.juguetes = juguetes
    }
  },
  /*actions: {

    agregarJuguete({commit}, juguete) {
      firebase
      .firestore()
        .collection('juguetes')
        .add(juguete);
    },*/

    /*updateJuguete({commit}, juguete) {
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
    },

    getDataJuguetes({commit}) {
      firebase
      .firestore()
        .collection('juguetes')
        .onSnapshot( (snapshot) => {
          let juguetes = [];
          snapshot.forEach((j) => {
            juguetes.push({ id: j.id, data: j.data() });
          });
          commit('GET_DATA_JUGUETES', juguetes)
        });
      },
    },
  getters: {
    getJugueteUpdating: (state) => (id) => {
      return state.juguetes.find(j => j.id === id)

    },

  },
 
  modules: {},*/
});


