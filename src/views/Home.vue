


<template>
<b-container class="bv-example-row">
  <div>
     <h2>Hola! (nombre del perro)</h2>
    <h5>Mostrar fotos del perro que están en la base de datos subidas por los dueños en el login</h5>
    <h2>¿Qué buscas?</h2>
    <b-form-select class="my-5">
      <b-form-select-option  class="select" v-model="selected" :value="null">Selecciona una raza</b-form-select-option>
      <b-form-select-option class="select" v-for="(raza,i) in razas" :key="i" :value="null">{{raza.data.nombre}}</b-form-select-option>
    </b-form-select>
    
    <b-form-select >
      <b-form-select-option v-model="selected" :value="null">Selecciona una edad</b-form-select-option>
      <b-form-select-option v-for="(edad,j) in edades" :key="j" :value="null">{{edad.data.rango}}</b-form-select-option>
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
</b-container>
</template>

<script>
import Card from "@/components/mostrarcard/Card.vue";
import {mapState, mapGetters, mapActions} from "vuex";

  export default {
    data() {
      
      return {
        selected : "null",
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
        },
         personaje: {
        data: {
          imgSrc : "",

        }
      }
      }  
      
    },
      computed: {
    ...mapState(['razas','edades']),
    ...mapState(["personas"]),
  },
   components: {
    Card,
  },
  }
  
</script>

<style lang="scss">

</style>
