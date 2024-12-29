<script setup lang="ts">
import { client } from '@/services/client'
import imageUrlBuilder from '@sanity/image-url'
const imageBuilder = imageUrlBuilder(client)
import { useRoute } from 'vue-router'
import { computed } from 'vue'

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

function imageUrlFor(source: string) {
  return imageBuilder.image(source)
}
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div class="hero-image" :style="{ '--url': 'url(' + imageUrlFor(banner[0].bild) + ')' }">
    <div class="hero-text">
      <h1>{{ banner[0].pageTitle }}</h1>
      <h3>{{ banner[0].shortText }}</h3>
    </div>
    <img class="silhouette" src="/src/assets/silhouette_Basel.png" />
  </div>
</template>

<style scoped>
.hero-image {
  background-image: var(--url);
  background-color: #cccccc;
  opacity: 0.5;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.silhouette {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
</style>
