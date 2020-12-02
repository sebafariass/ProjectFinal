<!-- Template -->
<template>
  <div>
    <div>
      <h1>Contacto Mascotas</h1>
    </div>


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
</template>

<!-- Script -->
<script>
import Card from "@/components/mostrarcard/Card.vue";
import {mapState, mapGetters, mapActions} from "vuex";
export default {
  name: "Muestra",
  data()  { 
    return {  
      personaje: {
        data: {
          imgSrc : "",

        }
      }
  }

    
  },
  computed: {
    ...mapState(["razas"]),
    ...mapState(["personas"]),
  },
  components: {
    Card,
  },
};
</script>

