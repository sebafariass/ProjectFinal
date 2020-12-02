
<template>
<div class="home__pagina">
<b-container class="bv-example-row">
  <div>
     <h2>Bienvenid@</h2>
    <h2>¿Qué buscas?</h2>
    <b-form-select class="my-5" v-model="selected1">
      <b-form-select-option class="select" :value="null" >Selecciona una raza</b-form-select-option>
      <b-form-select-option class="select" v-for="(raza,i) in razas" :key="i" :value="raza.data.codigo">{{raza.data.nombre}}</b-form-select-option>
    </b-form-select>
    <div class="mt-3">Selected1: <strong>{{ selected1 }}</strong></div>
    
    <b-form-select v-model="selected2" >
      <b-form-select-option :value="null">Selecciona una edad</b-form-select-option>
      <b-form-select-option v-for="(edad,j) in edades" :key="j" :value="edad.data.codigo">{{edad.data.rango}}</b-form-select-option>
    </b-form-select>
    <div class="mt-3">Selected2: <strong>{{ selected2 }}</strong></div>
  </div>
  <b-button class="mb-3" @click="goMuestra" variant="success">Buscar</b-button>
<!-- temporal -->
    <b-form-select class="my-5" v-model="selected1">
      <b-form-select-option class="select" :value="null" >Selecciona una raza</b-form-select-option>
      <b-form-select-option class="select" v-for="(persona,i) in personas" :key="i" :value="persona.data.city">{{persona.data.city}}</b-form-select-option>
    </b-form-select>
    <b-btn @click="getFiltradas('M')">BOTON2</b-btn>
    <!-- -->

</b-container>
</div>
</template>

<script>
import firebase from "firebase"
import {mapState, mapGetters, mapActions} from "vuex"
import router from "../router/index.js"
  export default {
    state: {
    personas : []
  },
    mutations: {
      GET_DATA_PERSONAS1(state, personas){
        state.personas = personas
      }
  },
    data() {
      return {
        selected1 : null,
        selected2 : null,
        rango: "",
        nombre: "",
        raza: {
          data: {
            nombre: "",
            codigo: ""
          }
        },
        edad: {
          data: {
            rango: "",
            codigo: ""
          }
        },
        persona: {
          data: {
            name: "",
            sex: ""
          }
        }
      }  
    },
    methods: {
      ...mapActions(['getDataPersonasFiltradas', 'getDataFiltradas']),
       goMuestra() {
         this.$router.replace("/muestra")
       },
       getFiltradas({commit}, sexo) {
         console.log("valor de sexo:" + sexo)
          firebase
          .firestore()
          .collection("personas")
          .where("sex","==",sexo)
          .onSnapshot((snapshot) => {
            let personas = [];
            snapshot.forEach((p) => {
              personas.push({ id: p.id, data: p.data() });
            });
          commit("GET_DATA_PERSONAS1", personas);
          });
          
       }
    },
    computed: {
    ...mapState(['razas','edades','personas']),
    }
  }
  
</script>

<style lang="scss">
.home__pagina {
  background: url("../assets/bg-home.jpg") no-repeat center fixed;
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
h2 {
  font-family:"Sansita Swashed", cursive;
}


</style>
