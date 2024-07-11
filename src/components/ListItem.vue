<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { useTasks } from "@/stores/tasks.js";

let router = useRouter();
let tasks = useTasks();



const props = defineProps({
  task: Object,
});


let handelDelete = (id) => {
  tasks.deleteTask(id);
  localStorage.setItem("tasks", JSON.stringify(tasks.tasks));
  router.push("/tasks");
  swal({
    title: "Task deleted!",
    type: "success",
    confirmButtonText: "Ok"
  });
};


</script>

<template>
  <div
    @click="router.push(`/task/${task.id}`)"
    class="alert mt-3 flex justify-between cursor-pointer"
    :class="{
      'border-warning': !task.completed,
      'border-success': task.completed,
    }"
    :key="task.id"
  >
    <div class="w-full">
      {{ task.title }}
    </div>

    <div class="flex gap-1">
      <button
        v-if="!task.completed"
        @click.stop="router.push(`/task/edit/${task.id}`)"
        class="btn btn-warning"
      >
        <i class="fa-solid fa-pen-to-square fa-lg"></i>
      </button>
      <button @click.stop="handelDelete(task.id)" class="btn btn-error">
        <i class="fa-solid fa-trash-can fa-lg"></i>
      </button>
    </div>
  </div>
</template>
