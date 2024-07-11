<script setup>
import { useTasks } from "@/stores/tasks.js";
import ListItem from "@/components/ListItem.vue";

let tasks = useTasks();

</script>

<template>
  <div class="card bg-base-200 p-5">
    <div v-show="tasks.inProgress.length > 0">
      <div class="font-bold">in progress tasks:</div>
      <list-item v-for="task in tasks.inProgress" :task="task" :key="task.id" />
    </div>

    <div v-show="tasks.completed.length > 0" class="mt-5">
      <div class="mt-5 font-bold">completed task:</div>
      <list-item v-for="task in tasks.completed" :task="task" :key="task.id" />
    </div>
  </div>

  <RouterView />
</template>
