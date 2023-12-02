<!-- =========================================================================================
    File Name: error.vue
    Description: error  Component in full page
    Component Name: error component
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
  <NuxtErrorBoundry>
    <div class="page-wrapper">
      <Header />

      <section class="page-title" style="background-image: url('/background/3.jpg');margin-top:0px;">
        <div class="container">
          <h1>صفحه خطا</h1>
        </div>
      </section>
      <section class="page-info">
        <div class="container">
          <div class="flex-box-five">
            <ul class="bread-crumb">
              <li><nuxt-link target="_parent" to="/">خانه</nuxt-link></li>
              <li>صفحه خطا</li>
            </ul>
            <div class="share-link">
              <a href="#"><i class="fa fa-share-alt"></i>اشتراک گذاری</a>
            </div>
          </div>
        </div>
      </section>
      <section class="error-section">
        <div class="container">
          <div class="inner-section">
            <h1>404</h1>
            <h2>صفحه مورد نظر شما یافت نشد</h2>
            <div class="text"></div>
            <div class="error-search-form">

              <div>
                <a class="p-3 w-50 home-link text-white underline-none" href="/">home</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </NuxtErrorBoundry>
</template>

<script setup>
import Footer from "./layouts/Footer.vue";
import Header from "./layouts/Header.vue";

</script>

<style></style>
