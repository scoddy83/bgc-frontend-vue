<script setup lang="ts">
import { client } from '@/services/client'
//import imageUrlBuilder from '@sanity/image-url'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Countdown from '@/components/CountdownComp.vue'
//const imageBuilder = imageUrlBuilder(client)

let loading = false
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let banner: any

const route = useRoute()

const currentRouteName = computed(() => {
  return route.name
})

const page = 'home'
console.log(currentRouteName.value)
//if (currentRouteName.value != undefined) page = currentRouteName.value

try {
  const query = `*[_type == "banner" && page match $page] {
      bild,
      shortText,
      PageTitle}`
  const params = { page: `${page}` } // Using wildcard search
  banner = await client.fetch(query, params)
} catch (error) {
  console.error('Failed to fetch data:', error)
} finally {
  loading = false
}
/*
function imageUrlFor(source: string) {
  return imageBuilder.image(source)
}
*/
</script>

<template>
  <div v-if="loading">Loading...</div>
  <v-parallax
    src="https://cdn.sanity.io/images/65ba4794/production/c559add7c4482624c2ac49b29f1d14b7e0451667-5760x3840.jpg"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">Basler Garde-Clique</h1>
      <h4 class="subheading">
        {{ banner[0].shortText }}
      </h4>
      <div class="subheading py-10"><countdown /></div>
    </div>
  </v-parallax>
</template>

<style scoped></style>
