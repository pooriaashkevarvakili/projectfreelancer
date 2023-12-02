<template>
    <div class="welcome-home-tab-seven">
        <div>
            <div class="images" v-viewer>
                <img width="130" v-for="src in images" :key="src" :src="src">
            </div>
            <button class="welcome-home-tab-seven-svg" type="button" @click="show">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"
                    height="40px" width="40px" version="1.1" id="Layer_1" viewBox="0 0 512.011 512.011"
                    xml:space="preserve">
                    <g>
                        <g>
                            <g>
                                <path
                                    d="M505.755,240.92l-89.088-89.088c-88.576-88.597-232.747-88.597-321.323,0L6.256,240.92     c-8.341,8.341-8.341,21.824,0,30.165l89.088,89.088c44.288,44.288,102.464,66.453,160.661,66.453s116.373-22.165,160.661-66.453     l89.088-89.088C514.096,262.744,514.096,249.261,505.755,240.92z M256.005,362.669c-58.816,0-106.667-47.851-106.667-106.667     s47.851-106.667,106.667-106.667s106.667,47.851,106.667,106.667S314.821,362.669,256.005,362.669z" />
                                <path
                                    d="M256.005,192.003c-35.285,0-64,28.715-64,64s28.715,64,64,64s64-28.715,64-64S291.291,192.003,256.005,192.003z" />
                            </g>
                        </g>
                    </g>
                </svg>
            </button>


        </div>
        <div>
            سامانه مدیریت امور حقوقی سامانه ای است که به کارشناسان دفتر حقوقی امکان ایجاد پرونده های الکترونیکی تسهیلاتی
            وغیرتسهیلاتی حقوقی،ردگیری وثبت اقدامات انجام شده برروی پرونده ها تعریف وکلاونیروهای حق الزحمه ای اقدام کننده
            ب ر روی پرونده،مدیریت کلیه هزینه های حقوقی،بایگانی الکترونیکی اسنادومدارک،دسترسی به گزارشات لحظه ای
            وآمارالکترونیکی ومطالعه الکترونیکی پرونده راخواهد داد.این سامانه به عنوان ابزاری قدرتمند،اسنادومدارک حقوقی
            درسازمان رامدیریت نموده وپس از ذخیره سازی الکترونیکی وتحلیل داده های اسناد،مدیران وکارشناسان حقوقی را در
            امربرنامه ریزی،انتخاب واجرای فرایندمناسب یاری می رساند.
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import 'viewerjs/dist/viewer.css'
import { directive as viewer } from "v-viewer"

export default defineComponent({

    directives: {
        viewer: viewer({
            debug: true
        })
    },
    data() {
        return {

            images: [
                "./legal.jpg",

            ]
        }
    },
    methods: {
        show() {
            const viewer = this.$el.querySelector('.images').$viewer
            viewer.show()
        }
    }
})
</script>

<style></style>