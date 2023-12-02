<template>
  <div>
    <ul>
      <li v-for="item in data.usefullinks" :key="item.id">
        <nuxt-link style="text-decoration: none;" target="_parent" :href="item.link">{{ item.content }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/usefullinks");
</script>

<style>
</style>