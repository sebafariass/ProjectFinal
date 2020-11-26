<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading"> L O G O + n o m b r e</strong>

        <v-spacer></v-spacer>

        <v-btn
        
          v-for="icon in icons"
          :key="icon"
          :href="icon.link"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon.icono }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Todos los derechos reservados</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
          {
              icono:  'mdi-facebook',
              link: 'http://www.facebook.com/'
          },
        {
              icono:  'mdi-twitter',
              link: 'http://www.twitter.com/'
          },
        {
              icono:  'mdi-linkedin',
              link: 'http://linkedin.com/'
          },
            {
              icono:  'mdi-instagram',
              link: 'https://www.instagram.com/'
          }
      ],
    }),
  }
</script>
<style lang="css">
.v-card__title + .v-card__subtitle, .v-card__title + .v-card__text {
    background-color: #343a40;
}
.v-card__title {
    background-color: #343a40;
} 
</style>