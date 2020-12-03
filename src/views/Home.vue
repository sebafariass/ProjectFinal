
<template>
<div class="home__pagina">
<b-container class="bv-example-row">
  <div>
     <h2>Bienvenid@</h2>
    <h2>¿Qué buscas?</h2>
    <b-form-select class="my-5" v-model="selected1" >
      <b-form-select-option class="select"  :value="null" >Selecciona una raza</b-form-select-option>
      <b-form-select-option class="select"  v-for="(raza,i) in razas" :key="i" :value="raza.data.codigo">{{raza.data.nombre}}</b-form-select-option>
    </b-form-select>
    
    <b-form-select v-model="selected2" >
      <b-form-select-option :value="null">Selecciona una edad</b-form-select-option>
      <b-form-select-option v-for="(edad,j) in edades" :key="j" :value="edad.data.rango">{{edad.data.rango}}</b-form-select-option>
    </b-form-select>

       <div>
      <v-container>
        <v-row>
          <v-col md="4" v-for="(personaje, i) in personas" :key="i">
            <Card :personaje="personaje" />
          </v-col>
        </v-row>
      </v-container>
      
    </div>
  </div>
  <b-button class="mb-3" @click="goMuestra" variant="success">Buscar</b-button>
</b-container>
</div>
</template>

<script>
import Card from "@/components/mostrarcard/Card.vue";
import {mapState, mapGetters, mapActions} from "vuex";

  export default {
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
      personaje: {
        data: {
          imgSrc : "",
          city: ""

        }
      },
      }  
      
    },
    methods: {
       goMuestra() {
         this.$router.replace("/muestra")
       },
    },
    computed: {
    ...mapState(['razas','edades']),
    ...mapState(["personas"]),
      
      /*filterProductsByCategory: function() {
      console.log("psonas:"+ this.personas.sex)
      return this.personas.filter(function(persona) {
        console.log("persona: "+ persona.name);
        return persona.sex == 'M';
      });
    } */

  },
   components: {
    Card,
  },
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
