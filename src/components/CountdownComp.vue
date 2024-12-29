<script setup lang="ts">
import { Countdown } from 'vue3-flip-countdown'
</script>

<template>
  <div class="countdown">
    <Countdown deadline="2025-03-10 04:00:00" :showLabels="false" />
  </div>
</template>

<style scoped>
.countdown {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  text-align: center;
}

.countdown div {
  margin: 0 10px;
  font-size: 2em;
}
</style>
