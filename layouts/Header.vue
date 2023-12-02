<template>
  <div class="banner">
    <div class="container">
      <div class="row">
        <div  class="col-md-7 col-lg-7 col-sm-12 mt-2 col-xs-12">
          <li style="font-size: 12px" class="text-white fanam-khas iran-sans">
            به فناوری اطلاعات کارافرین خاص خوش اومدید
          </li>
        </div>
        <div class="col-xl-1 col-md-12 change-location col-lg-12 mx-auto col-xs-12 col-sm-12">
          <div  class="change-dropdown">
            <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
    <template #button-content>
   <img src="./location.png" style="width: 20px"/>
    </template>
    <b-dropdown-item @click="changeLanguage('en')" href="#">
    <div class="d-flex">
     
      <span style="position: relative;right:-10px">en</span>
      <img style="width:20px;position: relative;right:-5px" src="./english.png"/>
    </div>
    
    </b-dropdown-item>
    <b-dropdown-item @click="changeLanguage('fa')" href="#">
      <div class="d-flex">
     
     <span style="position: relative;right:-5px">fa</span>
     <img style="width:20px" src="./iran.jpg"/>
   </div>
    </b-dropdown-item>
  </b-dropdown>
          </div>
        </div>
        <div  class=" time-all col-xl-2 col-lg-12 col-sm-12 col-xs-12 mt-3">
          <div class="d-flex">
            <span style="font-size: 14px" class="text-white iran-sans">
              {{ currentTime.toLocaleTimeString("fa-IR") }}
            </span>
            <span
              style="font-size: 14px"
              class="text-white mr-3 iran-sans mr-5"
            >
              {{ todayJalali }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCurrentTime } from "../composables/useCurrentTime";
import { useI18n } from "vue-i18n";
import moment from "jalali-moment";
import fa from "moment/src/locale/fa";

const { currentTime } = useCurrentTime();

const t = useI18n();

moment.locale("fa", fa);
let todayJalali = moment().locale("fa").format("YYYY/M/D");
const show1 = ref(false);
function changeLanguage(locale) {
  t.locale.value = locale;
}
</script>
<style>

</style>