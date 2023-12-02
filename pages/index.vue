<template>
  <div class="page-wrapper">
    <slider/>
    <welcome-home/>
    <services/>
    <project/>
    <about/>
    
  </div>
</template>

<script setup>
import slider from "../components/home/slider.vue"
import welcomeHome from "../components/home/welcomeHome.vue"
import services from "../components/home/services.vue"
import project from "../components/home/project.vue"
import about from "../components/home/about.vue"
// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }
</script>

<style>

</style>