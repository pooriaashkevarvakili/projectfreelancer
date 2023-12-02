<template>
  
    <div class="page-wrapper">
      <Header />
      <Headerinfo />
      <navbar />
      <NuxtPage/>
      
   
    </div>
    <Footer />
       <!-- <nuxt-link
        @click="scrollToTop"
        style="width: 50px; height: 40px"
        class=" d-flex btn btn-warning position-relative align-items-center justify-content-center bottom-right rounded-circle"
      >
        <span class="fa fa-angle-up"></span>
      </nuxt-link> -->
</template>

<script setup >
import Header from "./Header.vue";
import Headerinfo from "./Headerinfo.vue";
import navbar from "./navbar.vue";
import Footer from "./Footer.vue";
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>