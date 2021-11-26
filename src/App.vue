<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <span class="bar-title">Gram-Schmidt Algorithm</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://544.f21.matthewrobertballard.com/notes/vector_spaces/gram_schmidt/"
        target="_blank"
        text
      >
        <span class="mr-2">About the Algorithm</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HomePage/>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage';

export default {
  name: 'App',

  components: {
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
