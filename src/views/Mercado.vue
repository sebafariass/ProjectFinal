<!-- Template -->
<template>
  <div>
    <b-container class="banner_mercado p-5 mt-3">
    Sección para que los usuarios puedan compartir utensilios de sus mascotas para compartir 
    con los demas usuarios registrados
    </b-container>

    <div class="container">
      <v-container>
        <v-row>
          <v-col md="4" v-for="(tienda, i) in trueques" :key="i">
            <Cardmercado :tienda="tienda" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<!-- Script -->
<script>
import Cardmercado from "@/components/mostrarcard/Cardmercado.vue";
import { mapState } from "vuex";
export default {

  name: "Mercado",
  computed: {
    ...mapState(["trueques"]),
  },
  components: {
    Cardmercado,
  },
};
</script>

<!-- Style -->
<style lang="scss">



.banner_mercado {
  background-color: #071631ec;
  color: #ffffff;
  text-align: left;
}
</style>
