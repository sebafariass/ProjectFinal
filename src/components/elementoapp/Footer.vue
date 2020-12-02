<template>
  <v-footer class="footer"
    dark
    padless
  >
    <v-card
      flat
      tile
      class="lighten-1 white--text text-center" style="width: 100%; background: #e28585"
    >
      <v-card-text class="p-0">
        <v-btn
          v-for="(icon,j) in icons"
          :key="j"
          :href="j.link"
          class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon.icono }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text p-0">
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text p-0">
       <i class="fas fa-paw fa-1x"></i> {{ new Date().getFullYear() }} — <strong> Todos los derechos reservados</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
       icons: [
      {
        icono: "mdi-facebook",
        link: "http://www.facebook.com/",
      },
      {
        icono: "mdi-twitter",
        link: "http://www.twitter.com/",
      },
      {
        icono: "mdi-linkedin",
        link: "http://linkedin.com/",
      },
      {
        icono: "mdi-instagram",
        link: "https://www.instagram.com/",
      },
    ],
    }),
  }
</script>
<style lang="css">
.footer {
  font-family: 'Sansita Swashed', cursive;
};



</style>