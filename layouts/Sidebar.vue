<template>
  <div
    style="border-radius: 10px 0 25px; margin-top: 10px"
    class="navbar-change-one  bg-dark p-3"
  >
    <div>
      <Sidebar v-model:visible="visible">
        <div class="text-left ml-5">
          <nuxt-link class="underline-none" style="color: #000" href="/">خانه</nuxt-link>
        </div>
        <div class="text-left ml-5">
          <SplitButton
            outlined
            class="mr-2"
            :label="$t('service')"
            @click="save"
            :model="items"
          />
        </div>
        <div class="text-left ml-5">
          <SplitButton
            outlined
            class="mr-2"
            :label="$t('project')"
            @click="save"
            :model="project"
          />
        </div>
        <div class="text-left ml-5">
          <nuxt-link class="underline-none" style="color: #000" href="/cooperation">درخواست همکاری</nuxt-link>
        </div>
        <div class="text-left ml-5">
          <nuxt-link class="underline-none" style="color: #000" href="/pos"> خدمات pos </nuxt-link>
        </div>
      </Sidebar>
      <Button
        style="width: 60px; height: 40px; border-radius: 10px"
        icon="pi pi-home"
        @click="visible = true"
      />
    </div>
  </div>
</template>

<script setup>
  const visible = ref(false);
  const items = [
    {
      label: " توسعه سامانه های بانکی",
      command: () => {
        window.location.href = "/bankingSystems";
      },
    },
    {
      label: "توسعه سامانه های هوش تجاری",
      command: () => {
        window.location.href = "/intelligenceSystems";
      },
    },
    {
      label: "توسعه سامانه های نرم افزار",
      command: () => {
        window.location.href = "/SoftwareSystems";
      },
    },
    {
      label: " خدمات مشاوره ",
      command: () => {
        window.location.href = "/consultingServices";
      },
    },
  ];
  const project = [
    {
      label: "  بانکداری الکترونیک خاص",
      command: () => {
        window.location.href = "http://my.karafariniomid.ir/sign-in";
      },
    },
    {
      label: "سامانه هوشمند کسب کارامید ",
      command: () => {
        window.location.href = "http://smart.karafariniomid.ir/#";
      },
    },
    {
      label: "سامانه وصول مطالبات ونظارت",
      command: () => {
        window.location.href = "https://samen.karafariniomid.ir";
      },
    },
    {
      label: "سامانه حقوقی ",
      command: () => {
        window.location.href = "http://legalpilot.karafariniomid.ir/";
      },
    },
    {
      label: "سامانه مدیریت  صندوق های خرد محلی",
      command: () => {
        window.location.href = "https://tara.karafariniomid.ir";
      },
    },
    {
      label: "سامانه جستجوی شغل کشور",
      command: () => {
        window.location.href = "https://shoghl.mcls.gov.ir";
      },
    },
    {
      label: "سامانه اطلاعات بازار کار کشور",
      command: () => {
        window.location.href = "https://lmissandbox.karafariniomid.ir";
      },
    },
  ];
</script>

<style>
</style>