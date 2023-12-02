<template>
  <section class="welcome-section sp-two mt-1">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-12 col-sm-12 col-md-12 col-xs-12">
          
          <button class="tab-1-welcome-home-one " @click="activeTab = 'tab1'">
            <div class="welcome-home-supervision">
                     <span style="position: relative;right:15px">     معرفی ودسترسی به زیر سامانه نظارت</span>
                        </div>
            <div class="service-block-fourteen access">
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
                            معرفی ودسترسی به زیر سامانه نظارت
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>

          <button class="tab-2-welcome-home-one" @click="activeTab = 'tab2'">
            <span style="font-size: 14px;position: relative;right:15px" class="iran-sans">
                          معرفی ودسترسی سامانه های وصول مطالبات
                        </span>
            <div class="service-block-fourteen collection">
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
                            معرفی ودسترسی سامانه های وصول مطالبات
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button class="tab-3-welcome-home-one" @click="activeTab = 'tab3'">
            <span style="font-size: 14px;position: relative;right:15px" class="iran-sans">
                          معرفی ودسترسی به سامانه حقوقی
                        </span>
            <div class="service-block-fourteen legal">
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
                            معرفی ودسترسی به سامانه حقوقی
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
            <welcomeHomeTabFive />
            <!-- محتوای تب 1 -->
          </div>
          <div v-else-if="activeTab === 'tab2'">
            <welcomeHomeTabSix />
            <!-- محتوای تب 2 -->
          </div>
          <div v-else-if="activeTab === 'tab3'">
            <welcomeTabSeven />
            <!-- محتوای تب 2 -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import welcomeTabSeven from "./Tabs/welcomeHomeTabSeven.vue"
import welcomeHomeTabFive from './Tabs/welcomeHomeTabFive.vue';
import welcomeHomeTabSix from "./Tabs/welcomeHomeTabSix.vue"
const activeTab = ref(false);
const imagePath=ref("/cart/default.jpg") // مسیر عکس پیش‌فرض را در اینجا قرار دهید
function showImage(){
imagePath.value="/cart/select.jpg"
}
</script>
<style>
@import "../../assets/scss/_service-block-fourteen.scss";
</style>