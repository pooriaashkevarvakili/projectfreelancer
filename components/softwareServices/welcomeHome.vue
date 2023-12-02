<template>
  <section class="welcome-section sp-two mt-1">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-12 col-sm-12 col-md-12 col-xs-12">
          <!-- <button @click="showImage">نمایش عکس</button>
    <br>
    <img :src="imagePath" width="150" height="150"> -->
          <button class="tab-1-welcome-home-all" @click="activeTab = 'tab1'">
            <div class="iran-sans tab-1-welcome-home">
              <span style="position: relative;right:15px">مدیریت تفاهم نامه ها</span>
            </div>
            <div class="service-block-fourteen supervision tab-1-welcome-home">
              <div class="inner-box border-change-icon">
                <div class="image-box">
                  <img class="img-welcome-home" :src="imagePath" width="150" height="150" @click="showImage" />
                  <div class="caption d-flex flex-column">
                    <div class="change-icon">
                      <div class="d-flex mt-2 justify-content-between image-box-icon">
                      </div>
                      <div class="caption-desc mt-4">
                        <div class="lorem-change mt-2">
                          <div class="iran-sans text-justify h6">
                            مدیریت تفاهم نامه ها
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button class="tab-1-Contract" @click="activeTab = 'tab2'">
            <div>سامانه قراردادها</div>
            <div class="service-block-fourteen contract">
              <div class="inner-box border-change-icon">
                <div class="image-box">
                  <img class="img-welcome-home" :src="imagePath" width="150" height="150" @click="showImage" />
                  <div class="caption d-flex flex-column">
                    <div class="change-icon">
                      <div class="d-flex mt-2 justify-content-between image-box-icon">
                      </div>
                      <div class="caption-desc mt-4">
                        <div class="lorem-change mt-2">
                          <div class="iran-sans text-justify h6">
                            سامانه قراردادها
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button class="tab-3-Weapons"
            @click="activeTab = 'tab3'">
            <span style="font-size: 14px" class="iran-sans">
              تسلیحات غیرحضوری
            </span>
            <div class="service-block-fourteen contract">
              <div class="inner-box border-change-icon">
                <div class="image-box">
                  <img class="img-welcome-home" :src="imagePath" width="150" height="150" @click="showImage" />
                  <div class="caption d-flex flex-column">
                    <div class="change-icon">
                      <div class="d-flex mt-2 justify-content-between image-box-icon">
                      </div>
                      <div class="caption-desc mt-4">
                        <div class="lorem-change mt-2">
                          <div class="iran-sans text-justify h6">
                            تسلیحات غیرحضوری
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button class="tab-4-webapplication"
            @click="activeTab = 'tab4'">
            <span style="position: relative;right:15px"  class="iran-sans">
              معرفی وب اپلیکیشن خاص
            </span>
            <div class="service-block-fourteen web-application">
              <div class="inner-box border-change-icon">
                <div class="image-box">
                  <img class="img-welcome-home" :src="imagePath" width="150" height="150" @click="showImage" />
                  <div class="caption d-flex flex-column">
                    <div class="change-icon">
                      <div class="d-flex mt-2 justify-content-between image-box-icon">
                      </div>
                      <div class="caption-desc mt-4">
                        <div class="lorem-change mt-2">
                          <div class="iran-sans text-justify h6">
                            معرفی وب اپلیکیشن خاص
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <div v-if="activeTab === 'tab1'">
            <welcomeHomeTabOne />
            <!-- محتوای تب 1 -->
          </div>
          <div v-else-if="activeTab === 'tab2'">
            <welcomeHomeTabTwo />
            <!-- محتوای تب 2 -->
          </div>
          <div class="tab-3-welcome-home" v-else-if="activeTab === 'tab3'">
            <welcomeHomeTabThree />
            <!-- محتوای تب 2 -->
          </div>
          <div class="tab-3-welcome-home" v-else-if="activeTab === 'tab4'">
            <welcomeHomeFour />
            <!-- محتوای تب 2 -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import welcomeHomeTabOne from "./Tabs/welcomeHomeTabOne.vue"
import welcomeHomeTabTwo from "./Tabs/welcomeHomeTabTwo.vue"
import welcomeHomeTabThree from "./Tabs/welcomeHomeTabThree.vue";
import welcomeHomeFour from "./Tabs/welcomeHomeTabFour.vue"
const activeTab = ref(false)
const imagePath=ref("/cart/default.jpg") // مسیر عکس پیش‌فرض را در اینجا قرار دهید
function showImage(){
imagePath.value="/cart/select.jpg"
}
</script>
<style>
@import "../../assets/scss/_service-block-fourteen.scss";

</style>