<!-- =========================================================================================
    File Name: footer.vue
    Description: footer Component in page one 
    Component Name: footer component  
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
<footer style="position: relative;" class="main-footer">
    <div class="footer-top sp-two black-bg-3">
        <div class="container">
            <div class="row">
                <!--footer about one -->
                <div class="footer-about footer-column-border col-xl-6 col-lg-6">
                    <div class="inner">
                        <div class="footer-logo text-white iran-sans">وبگاه رسمی فنام</div>
                        <div class="text about-footer-matn-one iran-sans">
                            شرکت فناوری اطلاعات کارآفرین خاص، با نام سابق فناوری مالی کارآفرینی امید (فنام) در سال 1376، به عنوان شرکت سهامی خاص و با شناسه ملی 10101738541 ثبت شده است. این شرکت در حوزه It با خدماتی از قبیل مشاوره، طراحی، توسعه و پشتیبانی سامانه‌های نرم افزاری و موبایلی و نیز فروش و پشتیبانی پایانه‌های فروشگاهی در حال فعالیت است.

                        </div>
                        <div class="text about-footer-matn">
                            شرکت فناوری اطلاعات کارآفرین خاص، با نام سابق فناوری مالی کارآفرینی امید (فنام) در سال 1376، به عنوان شرکت سهامی خاص و با شناسه ملی 10101738541 ثبت شده است
                        </div>
                        <div class="link"><a href="/about" class="thme-btn btn-style-twelve iran-sans">بیشتر بخوانید</a></div>
                    </div>
                </div>
             <!-- end -->
                <useFullLinks/>
               

            </div>
        </div>
    </div>
    
    <!--Footer Bottom-->
    <div class="footer-bottom text-center black-bg">
        <div class="container">
            <div class="footer-copyright">فنام</div>
        </div>
    </div>
</footer>
  </template>
  <script setup>
   import useFullLinks from "./usefullinks.vue"
  </script>
  <style>

</style>
  