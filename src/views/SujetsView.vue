<script setup lang="ts">
  import sanity from '../services/client'
  import sujetComponent from '@/components/SujetComponent.vue'

  const query = `*[_type == "sujet"] {
  sujet,
  zedel,
  datum,
  vortrab,
  major,
  spiel,
  bild
  }[0...10]`;

  const sujets = await sanity.fetch(query);
</script>

<template>
  <div class="sujets pt-5">
    <h1>Sujets</h1>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li v-for="(sujet, index) in sujets" :key="(index)">
        <div class="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
        </div>
        <div v-if="index === 0 || index%2==0" class="timeline-start md:text-end mb-10">
          <sujetComponent 
            :sujet="sujet.sujet"
            :datum="sujet.datum"
            :zedel="sujet.zedel"
            :vortrab="sujet.vortrab"
            :major="sujet.major"
            :spiel="sujet.spiel"
            :bild="sujet.bild"
          />
        </div>
        <div v-else class="timeline-end mb-10">
          <sujetComponent 
            :sujet="sujet.sujet"
            :datum="sujet.datum"
            :zedel="sujet.zedel"
            :vortrab="sujet.vortrab"
            :major="sujet.major"
            :spiel="sujet.spiel"
            :bild="sujet.bild"
          />
        </div>
        <hr v-if="sujets.length > index+1" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
