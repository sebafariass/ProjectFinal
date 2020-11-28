<template>
  <div>
    <h2>Hola! (nombre del perro)</h2>
    <h5>Mostrar fotos del perro que están en la base de datos subidas por los dueños en el login</h5>
    <h2>¿Qué buscas?</h2>
    <b-form-select >
      <b-form-select-option v-model="selected" :value="null">Selecciona una raza</b-form-select-option>
      <b-form-select-option v-for="(raza,i) in razas" :key="i" :value="null">{{raza.data.nombre}}</b-form-select-option>
    </b-form-select>
    
    <b-form-select >
      <b-form-select-option v-model="selected" :value="null">Selecciona una edad</b-form-select-option>
      <b-form-select-option v-for="(edad,j) in edades" :key="j" :value="null">{{edad.data.rango}}</b-form-select-option>
    </b-form-select>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex";
  export default {
    data() {
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
      computed: {
    ...mapState(['razas','edades']),
  },
  }
  
</script>
