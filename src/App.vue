<script setup lang="ts">
import Header from '@/components/WebsiteHeader.vue'
import footerCmp from '@/components/WebsiteFooter-v2.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <Suspense>
      <main>
        <header>
          <Header />
        </header>
        <div class="wrapper">
          <RouterView />
        </div>
      </main>

      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
    <footer>
      <footerCmp />
    </footer>
  </v-app>
</template>

<style scoped></style>
