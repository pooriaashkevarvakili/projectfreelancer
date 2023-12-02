<!-- =========================================================================================
    File Name: services.vue
    Description: services Component in page one 
    Component Name: services component 
    ----------------------------------------------------------------------------------------
    Item Name: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
  <section class="our-services sp-two height-services">
    <div class="container">
      <div class="d-flex project-fanam  services-you-all">
        <div class="rectangle-all">
          <p class="services-you iran-sans">خدمات ما</p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 col-lg-12 col-xl-4 col-sm-12 col-xs-12">
          <nuxt-link class="underline-none" target="_parent" href="/softwareArchitecture">
            <div class="card card-eight">
              <div class="card-body">
                <div class="d-flex">
                  <div class="card-title iran-sans software-change mt-2 ml-3">
                    توسعه و راه اندازی سامانه های نرم افزاری
                  </div>
                </div>
                <div class="d-flex justify-content-center mt-4 img-rectangle-top">
                  <img width="200" height="200" src="./Asset 66.png" />
                </div>

                <p class="card-text  display-change  text-justify">
                  تخصص ما تحلیل، طراحی، توسعه و پشتیبانی سامانه‌های نرم افزاری با توجه به نیاز و درخواست شما است
                </p>

                <div class="d-flex justify-content-end  readmore-change">
                  <nuxt-link href="/softwareArchitecture" target="_parent"
                    class="btn  light-blue">بیشتربدانید...</nuxt-link>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class=" col-xl-7 col-lg-12 col-md-12 col-xs-12 col-sm-12">
          <nuxt-link class="underline-none" to="/saveTime" target="_parent">
            <div class="card card-five">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div class="card-title iran-sans time-box ml-3 mt-2">
                    توسعه و راه اندازی انبار داده و هوش تجاری
                  </div>
                  <div>
                    <img class="position-relative top-asset-21" height="100" src="./services/2.png" />
                  </div>

                </div>


                <p class="card-text font-change-finish mt-3 text-justify">
                  انبار داده، هسته اصلی پروژه‌های هوش تجاری و لازمه ایجاد تحولات دیجیتال است. بدون انبار داده، جریان
                  اطلاعات در سیستم‌های عملیاتی متوقف می‌شود.
                </p>
                <div class="d-flex  justify-content-end readmore-change-finish">
                  <nuxt-link to="/saveTime" target="_parent" class="btn iran-sans light-blue">بیشتربدانید...</nuxt-link>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
        <services-one />

      </div>
    </div>
  </section>
</template>
<script setup>
import servicesOne from "./servicesOne.vue"
</script>

<style></style>