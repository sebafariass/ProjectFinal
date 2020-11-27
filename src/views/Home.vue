<template>
  <div>
    <tr v-for="(raza,i) in razas" :key="i">
          <h2 class="text-center">{{raza.data.nombre}}</h2>
    </tr>
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
