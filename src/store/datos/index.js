import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    Productos: [],
    add: false,
  },
  getters: {
    datos(state) {
      return state.Productos;
    },
  },
  mutations: {
    setData(state, payload) {
      state.Productos = payload;
    },
    AddData(state, payload) {
      state.Productos.push(payload);
    },
    MostrarAdd(state) {
      state.add = !state.add;
    },
  },
  actions: {
    getData({ commit }) {
      firebase.firestore().collection("productos").onSnapshot((snapshot) => {
          let list_productos = [];
          snapshot.forEach((p) => {
            list_productos.push({
              id: p.id,
              nombre: p.data().nombre,
              codigo: p.data().codigo,
              stock: p.data().stock,
              precio: p.data().precio,
            });
          });
          commit("setData", list_productos);
        });
    },
    async agregando_data({ commit }, payload) {
      const juguete_unico = {
        precio: Number(payload.precio),
        stock: Number(payload.stock),
        nombre: payload.nombre.toLowerCase(),
        codigo: payload.codigo.toUpperCase(),
      };

      try {
          await firebase.firestore().collection("productos").add(juguete_unico);
          } 
      catch (error) {
        console.error("Intentalo nuevamente", error);
      }
    },

    async eliminando_juguete_accion({ commit }, id) {
      try {
      await firebase.firestore().collection("productos").doc(id).delete();
          } 
      catch (error) {
        console.error("Intentalo nuevamente", error);
      }
    },

    async editando_juguete__accion({ commit },juguetes ) {
      console.log(juguetes)
      try {
           await firebase.firestore().collection("productos").doc(juguetes.id).update(juguetes.data);
          }
       catch (error) {
        console.error("Error editando juguetes", error);
      }
    },
  },
};



