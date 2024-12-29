<script setup lang="ts">
import Events from '@/components/EventTable.vue'
</script>

<template>
  <div class="float-left w-100 h-100">
    <div class="float-left w-50 h-100">
      <v-parallax
        class="float-right"
        src="src/assets/roemer-events.png"
        cover
        width="80%"
      ></v-parallax>
    </div>
    <div class="float-left w-50 bg-grey-darken-3 pa-5">
      <Events />
    </div>
  </div>
</template>

<style scoped></style>
