<script setup lang="ts">
   import sanity from '../services/client'
   import imageUrlBuilder from "@sanity/image-url";
   const imageBuilder = imageUrlBuilder(sanity);
  
  defineProps([
    'sujet',
    'datum',
    'zedel',
    'vortrab',
    'spiel',
    'major',
    'bild'
  ])

  function imageUrlFor(source:string) : any {
    return imageBuilder.image(source);
  }
</script>

<template>
  <time class="font-mono italic">{{ datum }}</time>
  <div class="text-lg font-black">{{ sujet }}</div>
  {{ zedel }}
  <br />
  <table>
    <tr>
      <th>Vortrab</th>
      <td>{{ vortrab }}</td>
    </tr>
    <tr>
      <th>Major</th>
      <td>{{ major }}</td>
    </tr>
    <tr>
      <th>Spiel</th>
      <td>{{ spiel }}</td>
    </tr>
  </table>
  <img :src="imageUrlFor(bild).ignoreImageParams().width(240)" alt="Avatar Tailwind CSS Component" />
</template>

<style scoped>
</style>