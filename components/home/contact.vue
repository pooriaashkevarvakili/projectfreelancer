<!-- ===========
  components: { mobile },==============================================================================
    File Name: contact.vue
    Description: contact Component in page one
    Component Name: contact component 
    ----------------------------------------------------------------------------------------
    Item Name: Fanam 
      Author: pooria vakili

========================================================================================== -->

<template>
  <div class="sp-two form-all-contact">
    <form
      id="contact-form"
      name="contact_form"
      class="contact-form style-three"
      action="inc/sendmail.php"
      method="post"
    >
      <div class="row clearfix">
        <div class="">
          <div class="d-flex align-items-center">
            <div style="top: 10px; position: relative" class="text-dark">
              نام
            </div>

            <input
              type="text"
              name="form_name"
              placeholder=""
              class="form-name input-name"
              required=""
              data-msg-required="وارد کردن این قسمت الزامی است"
            />
          </div>
        </div>
        <div class="mt-3">
          <div class="d-flex">
            <div
              style="position: relative; right: -10px; top: 10px"
              class="text-dark d-flex align-items-center"
            >
              موبایل
            </div>
            <input
              style=""
              type="email"
              name="form_email"
              class="form-name form-mobile"
              value=""
              dir="ltr"
              required=""
              data-msg-required="وارد کردن این قسمت الزامی است"
              data-msg-email="لطفا یک ایمیل معتبر وارد کنید"
            />
          </div>
        </div>

        <div class="mt-3">
          <div class="d-flex">
            <div
              style="position: relative; right: -10px; top: -15px"
              class="text-dark d-flex align-items-center"
            >
              توضیحات
            </div>
            <input
              style="border-radius: 10px; height: 100px;"
              name="form_message"
            class="form-name"
              type="text"
            />
          </div>
        </div>
        <div class="link button-more">
          <nuxt-link
            href="/contact"
            
            target="_parent"
            class="theme-btn btn-style-one iran-sans"
            >
            <span  class="button-change-send text-white">ارسال</span>
            </nuxt-link
          >
        </div>
        <mobile />
      </div>
    </form>
  </div>
</template>
<script setup>
import mobile from "./mobile.vue";
</script>
<style>
</style>


