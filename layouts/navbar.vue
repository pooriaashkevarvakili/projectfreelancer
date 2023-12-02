<!-- =========================================================================================
    File Name: navbar.vue
    Description: navbar  Component in layout page
    Component Name: navbar component
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
    <div class="navbar-change">
      <div style="" class="header-upper">
        <div class="container">
          <div>
            <b-navbar
              class="navbar-fanam"
              toggleable="lg"
              type="dark"
              variant="dark"
            >
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item style="color: #fff; font-size: 14px" href="/"
                    >
                    <span class="text-white iran-sans">{{ $t("home") }}</span>
                  </b-nav-item>
                  <b-nav-item href="/services"> </b-nav-item>
                  <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                      <em style="font-size: 14px" class="font-style-none text-white iran-sans">{{
                        $t("service")
                      }}</em>
                      <i style="font-size: 14px" class="fa fa-chevron-down"></i>
                    </template>
                    <b-dropdown-item href="/bankingSystems"
                      >توسعه سامانه های بانکی</b-dropdown-item
                    >
                    <b-dropdown-item href="/intelligenceSystems">
                      توسعه سامانه های هوش تجاری</b-dropdown-item
                    >
                    <b-dropdown-item href="/SoftwareSystems">
                      توسعه سامانه های نرم افزار
                    </b-dropdown-item>
                    <b-dropdown-item href="/consultingServices">
                      خدمات مشاوره</b-dropdown-item
                    >
                  </b-nav-item-dropdown>
                  <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                      <em
                        style="font-size: 14px"
                        class="font-style-none iran-sans text-white"
                        >{{ $t("project") }}</em
                      >
                      <i style="font-size: 14px" class="fa fa-chevron-down"></i>
                    </template>
                    <b-dropdown-item href="http://my.karafariniomid.ir/sign-in"
                      >بانک داری الکترونیک خاص</b-dropdown-item
                    >
                    <b-dropdown-item href="http://smart.karafariniomid.ir"
                      >سامانه هوشمند کسب کارامید</b-dropdown-item
                    >
                    <b-dropdown-item href="https://samen.karafariniomid.ir"
                      >سامانه وصول مطالبات ونظارت</b-dropdown-item
                    >
                    <b-dropdown-item href="http://legalpilot.karafariniomid.ir/"
                      >سامانه حقوقی
                    </b-dropdown-item>
                    <b-dropdown-item href="https://tara.karafariniomid.ir"
                      >سامانه مدیریت صندوق های خرد محلی</b-dropdown-item
                    >
                    <b-dropdown-item href="https://shoghl.mcls.gov.ir"
                      >سامانه جستجوی شغل کشور</b-dropdown-item
                    >
                    <b-dropdown-item href="https://lmissandbox.karafariniomid.ir"
                      >سامانه اطلاعات بازار کار کشور</b-dropdown-item
                    >
                  </b-nav-item-dropdown>
                  <b-nav-item style="font-size: 14px" href="/cooperation ">
                    <span class="text-white iran-sans">درخواست همکاری</span>
                  </b-nav-item>
                  <b-nav-item style="font-size: 14px" href="/pos"
                    ><span class="iran-sans text-white">خدماتpos</span></b-nav-item
                  >
                  <b-nav-item style="font-size: 14px" href="/about"
                    ><span class="iran-sans text-white">درباره ما</span></b-nav-item
                  >
                  <b-nav-item style="font-size: 14px" href="/contact">
                    <span class="iran-sans text-white">ارتباط باما</span></b-nav-item
                  >
                </b-navbar-nav>
  
              </b-collapse>
            </b-navbar>
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex position-relative justify-content-center sidebar-all align-items-center"
    >
    <Sidebar/>
    </div>
  </template>
  <script setup >
  import Sidebar from "./Sidebar.vue"

  
  
  </script>
  <style>
  </style>
  