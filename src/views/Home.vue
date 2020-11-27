<template>
  <div>
    <b-form-select >
      <b-form-select-option v-model="selected" :value="null">Selecciona una raza</b-form-select-option>
      <b-form-select-option v-for="(raza,i) in razas" :key="i" :value="null">{{raza.data.nombre}}</b-form-select-option>
    </b-form-select>
    
    <!--
    <tr v-for="(raza,i) in razas" :key="i">
          <h2 class="text-center">{{raza.data.nombre}}</h2>
    </tr--> 
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex";
  export default {
    data() {
      return {
        nombre: "",
        raza: {
          data: {
            nombre: "",
          }
        } 
      }  
    },
      computed: {
    ...mapState(['razas']),
   
  },
  }
</script>
