<template>
  <v-card class="cardAdoption mx-auto" max-width="344">
    <v-card-text>
      <v-card-title class="tituloCard">{{ tienda.data.nombre }}</v-card-title>
      <v-img height="250" :src="tienda.data.img"></v-img>
      <v-divider class="mx-4"></v-divider>
    </v-card-text>

    <v-card-actions>
      <v-btn class="btnMoreAdoption" id="btnMoreAdoption" @click="reveal = true">
        Leer más
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <div class="textCard" id="textoCard">
            <h5 class="contactoCard">Datos del Trueque</h5>
            <div id="nombreMascota"><b>Nombre de dueño:</b> {{ tienda.data.nombre }}</div>
            <div id="sexoMascota"><b>Nombre del Producto:</b> {{ tienda.data.producto }}</div>
            <div id="edadMascota"><b>Tiempo de uso:</b> {{ tienda.data.tiempo }}</div>
            <div id="causa_trueque"><b>¿Por qué lo truequeas?:</b> {{ tienda.data.causa }}</div>
            <div id="intercambio_trueque"><b>Intercambio:</b> {{ tienda.data.intercambio}}</div>
            <div id="ciudad_trueque"><b>Ciudad en la que vives:</b> {{ tienda.data.ciudad }}</div>


            <div>
              <h5 class="contactoCard" id="datosContacto">Datos contacto</h5>
              <div id="nombreContacto"><b>Nombre:</b> {{ tienda.data.contacto }}</div>
              <div id="numeroContacto"><b>Wsapp:</b> {{ tienda.data.wsapp }}</div>
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="mb-3">
          <v-btn class="btnCerrarAdoption" id="btnCerrarAdoption" @click="reveal = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "Cardmercado",
  props: ["tienda"],
  data: () => ({
    reveal: false,
  }),
};
</script>

<style lang="scss">
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.cardAdoption {
  font-family: "Source sans pro";
}
.tituloCard {
  color: #2c3e50c2 !important;
  font-size: 25px;
}
.textCard {
  text-align: left;
  color: #2c3e50c2 !important;
  font-size: 14px;
}
.btnCerrarAdoption {
  background-color: #fcd34f !important;
  color: #ffffff !important;
  margin-top: 20px;
}
.btnMoreAdoption {
  background-color: #fcbd11 !important;
  color: #ffffff !important;
}
.contactoCard {
  font-weight: bold;
  margin-top: 20px;
}
</style>
