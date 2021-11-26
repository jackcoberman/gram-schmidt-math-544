<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->
        <span class="bar-title">Gram-Schmidt Algorithm</span>

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://en.wikipedia.org/wiki/Gram%E2%80%93Schmidt_process"
        target="_blank"
        text
      >
        <span class="mr-2">About the Algorithm</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HomePage/>
      <!-- <HelloWorld/> -->
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import HomePage from './components/HomePage';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    HomePage
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .bar-title {
    font-size: 25px;
  }
</style>
