<script setup>
import { RouterLink, RouterView } from "vue-router";
import navbar from "@/components/navbar.vue";


</script>

<template>
  <navbar>
    <RouterLink
      class="p-2"
      active-class="border text-primary border-primary rounded-full"
      to="/task/create"
      >Add Task</RouterLink
    >
    <RouterLink
      class="p-2"
      active-class="border text-primary border-primary rounded-full"
      to="/tasks"
      >Tasks</RouterLink
    >
  </navbar>
  <div class="container mx-auto mt-10 max-w-[800px]">
    <RouterView />
  </div>
</template>
