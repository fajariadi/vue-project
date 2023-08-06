<template>
  <div>
    <h1 class="pl-3">Movies</h1>
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="movie in listMovies"
            :key="movie.id"
            :cols= 3
          >
          <card-component :item="movie"/>
          </v-col>
        </v-row>
      </v-container>
    <h1 class="pl-3">TV Series</h1>
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="serie in listSeries"
            :key="serie.id"
            :cols= 3
          >
            <card-component :item="serie"/>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
  import CardComponent from '../components/CardComponent'

  export default {
    name: 'HomeView',
    
    computed: {
      listMovies() {
        return this.$store.state.movies.list
      },
      listSeries() {
        return this.$store.state.movies.series
      },
    },
    methods: {
      fetchMovies() {
        this.$store.dispatch("movies/fetchMovies");
      },
      fetchSeries() {
        this.$store.dispatch("movies/fetchSeries");
      },
    },
    mounted() {
      this.fetchMovies(),
      this.fetchSeries()
    },

    components: {
      CardComponent,
    },
  }
</script>
