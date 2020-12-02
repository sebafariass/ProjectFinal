
<template>
<div class="home__pagina">
<b-container class="bv-example-row">
  <div>
     <h2>Bienvenid@</h2>
    <h2>¿Qué buscas?</h2>
    <b-form-select class="my-5">
      <b-form-select-option  class="select" v-model="selected" :value="null">Selecciona una raza</b-form-select-option>
      <b-form-select-option class="select" v-for="(raza,i) in razas" :key="i" :value="null">{{raza.data.nombre}}</b-form-select-option>
    </b-form-select>
    
    <b-form-select >
      <b-form-select-option v-model="selected" :value="null">Selecciona una edad</b-form-select-option>
      <b-form-select-option v-for="(edad,j) in edades" :key="j" :value="null">{{edad.data.rango}}</b-form-select-option>
    </b-form-select>
  </div>
  <b-button class="mb-3" @click="goMuestra" variant="success">Buscar</b-button>
</b-container>
</div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex"
import router from "../router/index.js"
  export default {
    data() {
      selected : "null"
      return {
        rango: "",
        nombre: "",
        raza: {
          data: {
            nombre: "",
          }
        },
        edad: {
          data: {
            rango: ""
          }
        }
      }  
    },
    methods: {
       goMuestra() {
         this.$router.replace("/muestra")
       } 
    },
    computed: {
    ...mapState(['razas','edades']),
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
