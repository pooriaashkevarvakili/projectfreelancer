<!-- =========================================================================================
    File Name: about.vue
    Description: about Component 
    Component Name: about component in page one
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

========================================================================================== -->

<template>
  

  
  <div  class=" float-start art-nine">
    <div class=" ">
      <img  src="./fanam/N.png" alt="">
    </div>
  </div> 
  <div class="about-us about-padding">
    <div class="container">
      <div class="row">
      <div class="col-xl-7 col-lg-8 col-md-6 col-sm-6">
        <div class="about-column mt-5">
                    <div class="d-flex sec-title about-fanam">
                      <div class="rectangle mt-1"></div>

                      <div class=" h6 mr-5">
                        درباره فناوری اطلاعات کارآفرین خاص
                      </div>
                    </div>
                    </div>
                    <div  class="img-fanam">
                      <img  class="img-height-fanam"  src="/fanam/Asset 97.png" alt="">
                    </div>
                    <div  class="text text-justify  change-mohtava-about">
                      شرکت فناوری اطلاعات کارآفرین خاص، با نام سابق فناوری مالی
                      کارآفرینی امید (فنام) در سال 1376، به عنوان شرکت سهامی خاص
                      و با شناسه ملی 10101738541 ثبت شده است. این شرکت در حوزه
                      It با خدماتی از قبیل مشاوره، طراحی، توسعه و پشتیبانی
                      سامانه‌های نرم افزاری و موبایلی و نیز فروش و پشتیبانی
                      پایانه‌های فروشگاهی در حال فعالیت است.
                    </div>
                 <div  class="text text-justify   change-mohtava-about-three">
                  شرکت فناوری اطلاعات کارآفرین خاص، با نام سابق فناوری مالی کارآفرینی امید (فنام) در سال 1376، به عنوان شرکت سهامی خاص و با شناسه ملی 10101738541 ثبت شده است.
                 </div>
                 <div style="" class="link d-flex more-know justify-content-end">
                      <nuxt-link
                        href="/about"
                        target="_parent"
                        class="theme-btn readmore-change-more underline-none  iran-sans"
                        >بیشتربدانید...</nuxt-link
                      >
                    </div>
      </div>
      <div class="col-xl-5 col-lg-4 col-md-6 col-sm-6">
    <div>
   <contact/>
    </div>
      </div>
 
    </div>

    </div>
  </div>


</template>
<script setup>
import contact from "./contact.vue"
</script>
<style >
</style>
