<template>
  <div>
    <v-card class="cardAdoption mx-auto" max-width="344">
      <v-card-text>
        <v-card-title class="tituloCard">{{
          personaje.data.name
        }}</v-card-title>
        <v-img height="250" :src="personaje.data.imgSrc"></v-img>
        <v-card-text>{{ personaje.data.especie }}</v-card-text>
        <v-divider class="mx-4"></v-divider>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="info_card = true"> Información Extra </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card
          v-if="info_card"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
        >
          <v-card-text class="pb-2">
            <div>
              <h5>Datos Mascota</h5>
             
              <div><b>Nombre:</b> {{ personaje.data.name }}</div>
              <div><b>Edad:</b> {{ personaje.data.edad }}</div>
              <div><b>Raza:</b> {{ personaje.data.race }}</div>
              <div><b>Sexo:</b> {{ personaje.data.sex }}</div>
              <div><b>Especie:</b> {{ personaje.data.especie }}</div>
             <div><b>Ciudad:</b> {{ personaje.data.city }}</div>
             <div><b>Info:</b> {{ personaje.data.info }}</div>
            </div>
          </v-card-text>

          <v-card-actions class="pt-2">
            <v-btn @click="info_card = false"> Cerrar </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["personaje"],
  data: () => ({
    info_card: false,
  }),
};
</script>

<style lang="scss">
</style>
