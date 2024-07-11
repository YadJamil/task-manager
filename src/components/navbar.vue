<script setup>
import ThemeChanger from "@/components/themeChanger.vue";
</script>

<template>
  <div class="grid place-items-center mt-10">
    <div class="flex items-center gap-5 rounded-full bg-base-300 p-2">
      <slot />

      <theme-changer />
    </div>
  </div>
</template>
