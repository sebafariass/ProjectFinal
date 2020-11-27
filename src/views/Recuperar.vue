<!-- Template -->
<template>
  <div>
    <div class="banner-breed">
      <h1>Información sobre Razas</h1>
    </div>

    

    <div>
      <v-container>
        <v-row>
          <v-col md="4" v-for="(raza, i) in razas" :key="i">
            <Card :raza="raza" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<!-- Script -->
<script>
import Card from "@/components/mostrarcard/Card.vue";
import { mapState } from "vuex";
export default {
  name: "Recuperar",
  computed: {
    ...mapState(["razas"]),
  },
  components: {
    Card,
  },
};
</script>