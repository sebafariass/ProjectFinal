<!-- Template -->
<template>
  <div class="mercado__pagina">
    <div>
      <h1>Espacio de intercambio</h1>
      <h5>
        Donde los usuarios pueden compartir e intercambiar elementos de sus
        mascotas
      </h5>
    </div>
    <v-container>
      <v-row>
        <v-col md="4" v-for="(tienda, i) in trueques" :key="i">
          <Cardmercado :tienda="tienda" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<!-- Script -->
<script>
import Cardmercado from "@/components/mostrarcard/Cardmercado.vue";
import { mapState } from "vuex";
export default {
  name: "Mercado",
  data: {
    Cardmercado: "",
  },
  computed: {
    ...mapState(["trueques"]),
  },
  components: {
    Cardmercado,
  },
};
</script>

<!-- Style -->
<style>
.mercado__pagina {
  background: url("../assets/bg-mercadito.jpg") no-repeat center fixed;
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
h1 {
  color: white;
  font-family: "Sansita Swashed", cursive;
}
h5 {
  color: white;
  font-family: "Sansita Swashed", cursive;
  text-align: center;
}
</style>
