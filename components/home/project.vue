<!--  =========================================================================================
    File Name: project.vue
    Description: project Component in page one
    Component Name: project component 
    ----------------------------------------------------------------------------------------
    Item Name: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
  <section style="padding:80px" class="project-section ">
    
    <div class="container">
      <div class="   sec-title d-flex">
        <div class="rectangle-asly" ></div>
        <div class=" ml-2 recent-project iran-sans" >
          {{ $t("recentProjects") }}
        </div>
      </div>
      <div class="swipper-change-navigation ">
        <swiper
       
          class="swiper"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :space-between="2"
          :slides-per-view="4"
          :modules="modules"
          navigation
        >
          <swiper-slide
            v-for="item in project"
            :key="item.id"
            class="slide"
          >
            <div class="projects-block-one">
              <div class="inner-box">
                <img  :src="item.img" alt="" />
                <div class="box-content box-content-padding">
                  <ul class="title-matn" style="">
                    <li class="title-one text-white mt-3">
                      {{ item.titleOne }}
                    </li>
                    <div style="font-size:16px" class="title-two text-white mt-5 ">
                      {{ item.titleTwo }}
                    </div>
                    <li  class="d-flex justify-content-end  mt-3">
                      <nuxt-link
                        class="text-warning underline-none"
                        target="_parent"
                        :to="item.link"
                      >
                        {{ item.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            v-for="item in project"
            :key="item.id"
            class="slide"
          >
            <div class="projects-block-one">
              <div class="inner-box">
                <img class="project-img" :src="item.img" alt="" />
                <div class="box-content box-content-padding">
                  <ul class="title-matn" style="">
                    <li class="title-one text-white  mt-3">
                      {{ item.titleOne }}
                    </li>
                    <div  class="title-two text-white mt-5 ">
                      {{ item.titleTwo }}
                    </div>
                    <li  class="d-flex justify-content-end  mt-3">
                      <nuxt-link
                        class="text-warning underline-none"
                        target="_parent"
                        :to="item.link"
                      >
                      {{ item.title }}

                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            v-for="item in project"
            :key="item.id"
            class="slide"
          >
            <div class="projects-block-one">
              <div class="inner-box">
                <img class="project-img" :src="item.img" alt="" />
                <div class="box-content box-content-padding">
                  <ul class="title-matn" style="">
                    <li class="title-one text-white  mt-3">
                      {{ item.titleOne }}
                    </li>
                    <div  class="title-two text-white mt-5 ">
                      {{ item.titleTwo }}
                    </div>
                    <li  class="d-flex justify-content-end  mt-3">
                      <nuxt-link
                        class="text-warning underline-none"
                        target="_parent"
                        :to="item.link"
                      >
                        {{ item.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </swiper-slide>
          <swiper-slide
            v-for="item in project"
            :key="item.id"
            class="slide"
          >
            <div class="projects-block-one">
              <div class="inner-box">
                <img class="project-img" :src="item.img" alt="" />
                <div class="box-content box-content-padding">
                  <ul class="title-matn iran-sans" style="">
                    <li class="title-one iran-sans text-white mt-3 ">
                      {{ item.titleOne }}
                    </li>
                    <div  class="title-two iran-sans text-white mt-5">
                      {{ item.titleTwo }}
                    </div>
                    <li  class="d-flex justify-content-end  mt-3">
                      <nuxt-link
                        class="text-warning iran-sans underline-none"
                        target="_parent"
                        :to="item.link"
                      >
                        {{ item.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <carousel-two/>
  
    </div>
  </section>
</template>

<script setup>
import { Autoplay,  Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import CarouselTwo from "./carouselTwo.vue";
const modules=([Autoplay,Navigation])
const project=ref([
{
       id: 1,
      link: "http://my.karafariniomid.ir/sign-in",
       title: "مشاهده همه",
       img: "https://s30.picofile.com/file/8469334234/Artboard_1.png",       titleOne: "سامانه بانکداری الکترونیک  ",
       titleTwo: "پروژه های مبتنی بر محاسبه داده ها و استخراج اطلاعات با اهدافی همچون تهیه گزارشات مدیریتی و"
     },
   {
      id: 2,
       link: "http://smart.karafariniomid.ir/",
       title: "مشاهده همه",
       img: "https://s31.picofile.com/file/8467761792/Artboard_3.png",
       titleOne: "سامانه اسمارت",
      titleTwo: "این محصول معرف سامانه اسمارت است که یک ابزار داخلی برای مدیریت سیستم اداری داخلی و"
    },
    {
      id: 3,
      link: "https://samen.karafariniomid.ir/",
      title: "مشاهده همه",
      img: "https://s31.picofile.com/file/8467761842/Artboard_7.png",
      titleOne: "سامانه سامن",
      titleTwo: "سامانه الکترونیکی وصول مطالبات و نظارت بر طرح های تسهیلاتی. این سامانه با دارا بودن یک نسخه"
     },
    {
     id: 4,
     link: "http://legalpilot.karafariniomid.ir/",
      title: "مشاهده همه",
      img: "https://s30.picofile.com/file/8467761826/Artboard_6.png",
      titleOne: "سامانه حقوقی",
      titleTwo: "سامانه مدیریت صندوق های خرد محلی با عنوان تارا (با تمرکز بر توانمندسازی در بخش روستایی)"
   },
  {
      id: 5,
      link: "https://tara.karafariniomid.ir/",
      title: "مشاهده همه",
      img: "https://s30.picofile.com/file/8467761818/Artboard_5.png",
       titleOne: "سامانه تارا",
      titleTwo: "سامانه مدیریت صندوق های خرد محلی با عنوان تارا( با تمرکز بر توانمندسازی در بخش روستایی)."
     },
    {
      id: 6,
       link: "https://shoghl.mcls.gov.ir/",
      title: "مشاهده همه",
       img: "https://s31.picofile.com/file/8467761868/Artboard_12.png",
      titleOne: "سامانه جست و جوی شغل ",
       titleTwo: "این محصول معرف سامانه اسمارت است که یک ابزار داخلی برای مدیریت سیستم اداری داخلی و"   },
{
      id: 7,
     link: "/services",
     title: "مشاهده همه",
      img: "https://s31.picofile.com/file/8467761876/Artboard_13.png",
      titleOne: "سامانه اطلاعات بازار کار  ",
      titleTwo: "این محصول معرف سامانه اسمارت است که یک ابزار داخلی برای مدیریت سیستم اداری داخلی و"
    }
])
</script>
<style>

</style>