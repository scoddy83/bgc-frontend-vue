<script setup lang="ts">
import Menu from '@/components/HeaderMenu.vue'
import Hero from '@/components/BannerPicture-v2.vue'
</script>

<template>
  <Hero />
  <div class="header">
    <div class="menu-wrapper">
      <img
        alt="Basler Garde-Clique Logo"
        class="logo"
        src="@/assets/logo.svg"
        width="50"
        height="50"
      />
      <div class="menu">
        <Menu />
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: #fff;
  opacity: 60%;
  top: 0;
  width: 100%;
  position: absolute;
}

.menu-wrapper {
  width: 80%;
  margin: auto;
}

.menu {
  margin-top: 10px;
  text-align: right;
  float: right;
  font-family: LithosProBlack;
}

@font-face {
  font-family: LithosProBlack;
  src: url(../assets/fonts/LithosPro-Black.otf);
  font-weight: bold;
}
</style>
