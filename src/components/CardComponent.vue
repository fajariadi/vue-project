<template>
    <v-card>
        <v-img
        :src="`https://image.tmdb.org/t/p/w500${item.backdrop_path}`"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
        >
        <v-card-title v-if="item.title">{{ item.title }}</v-card-title>
        <v-card-title v-else>{{ item.name }}</v-card-title>
        </v-img>
    </v-card>
  </template>

<script>
export default {
    props: ['item'],
}
</script>