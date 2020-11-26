<template>
  <div>
    <tr v-for="(raza,i) in razas" :key="i">
          <td>{{raza.data.nombre}}</td>
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
    ...mapGetters(['getJugueteUpdating'])
  },
  }
</script>
