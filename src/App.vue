<script setup lang="ts">
import HWGL from "./components/HeroWebGL.vue";
import HeroSection from "./components/HeroSection.vue";
</script>

<template>
  <div class="wrapper__merger">
    <HWGL class="wrapper__main-back-layer" />
    <HeroSection class="wrapper__main-front-layer" />
  </div>
</template>

<style scoped lang="scss">
.wrapper__merger {
  position: relative;
  width: 100%;
  min-height: 100vh;
  .wrapper__main-back-layer {
    position: absolute;
  }

  .wrapper__main-front-layer {
    position: relative;
    margin: 0 auto;
    padding-top: 4rem;
    // border: 1px solid red;
  }
}
</style>
