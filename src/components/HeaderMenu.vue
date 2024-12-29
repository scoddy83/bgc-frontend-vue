<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/home">Home</RouterLink>
  <RouterLink to="/mitglieder">Mitglieder</RouterLink>
  <RouterLink to="/lieder">Stygli</RouterLink>
  <!-- <v-app-bar-title><RouterLink to="/sujets">Sujets</RouterLink></v-app-bar-title> -->
</template>

<style scoped>
a:link,
a:visited {
  color: #555;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;
}

a:hover {
  color: black;
  text-decoration: none;
  font-weight: bolder;
}
</style>
