<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Movie Mania</h1>
      </div>

      <v-spacer></v-spacer>
      <navbar-component />
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import NavbarComponent from './components/NavbarComponent'

export default { 
  name: 'App',

  components: {
    NavbarComponent,
    },
};
</script>
