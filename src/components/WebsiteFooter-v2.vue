<script setup lang="ts">
import { ref } from 'vue'

const socialLinks = ref([
  { icon: 'mdi-email', url: 'mailto:kontakt@bgc.ch' },
  { icon: 'mdi-facebook', url: 'https://www.facebook.com/baslergardeclique' },
  { icon: 'mdi-instagram', url: 'https://www.instagram.com/baslergarde/' },
])
</script>

<template>
  <v-footer class="d-flex flex-column pa-0">
    <div class="bg-purple-lighten-4 d-flex w-100 align-center px-4">
      <strong>Folge uns auf Social Media!</strong>

      <v-spacer></v-spacer>
      <img
        alt="Basler Garde-Clique Logo"
        class="logo"
        src="@/assets/logo.svg"
        width="100"
        height="100"
      />
      <v-spacer></v-spacer>
      <div>
        <v-btn
          v-for="link in socialLinks"
          :key="link.icon"
          :icon="link.icon"
          :href="link.url"
          target="_blank"
          class="mx-4"
          size="small"
          variant="plain"
        ></v-btn>
      </div>
    </div>

    <div class="px-4 py-2 bg-grey-darken-4 text-center w-100">
      <strong>Copyright © {{ new Date().getFullYear() }} — Basler Garde-Clique MMVIII</strong>
    </div>
  </v-footer>
</template>

<style scoped></style>
