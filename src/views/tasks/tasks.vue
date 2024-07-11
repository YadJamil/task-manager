<script setup>
import { useTasks } from "@/stores/tasks.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

let tasks = useTasks();
let router = useRouter();

let taskTitle = ref("");
let taskDescription = ref("");

let handelDelete = (id) => {
  tasks.deleteTask(id);
  localStorage.setItem("tasks", JSON.stringify(tasks.tasks));
};

</script>

<template>

  <div class="card bg-base-200 p-5">
    <div v-show="tasks.inProgress.length > 0">
      <div class="font-bold">in progress tasks:</div>
      <div
        v-for="task in tasks.inProgress"
        @click="router.push(`/task/${task.id}`)"
        class="alert mt-3 flex justify-between border-warning cursor-pointer"
        :key="task.id"
      >
        <div class="w-full">
          {{ task.title }}
        </div>

        <div class="flex gap-1">
          <button @click.stop="router.push(`/task/edit/${task.id}`)" class="btn btn-warning">
            <i class="fa-solid fa-pen-to-square fa-lg"></i>
          </button>
          <button @click.stop="handelDelete(task.id)" class="btn btn-error">
            <i class="fa-solid fa-trash-can fa-lg"></i>
          </button>
        </div>
      </div>
    </div>

    <div v-show="tasks.completed.length > 0" class="mt-5">
      <div class="mt-5 font-bold">completed task:</div>
      <div
        v-for="task in tasks.completed"
        @click="router.push(`/task/${task.id}`)"
        class="alert mt-3 flex justify-between border-success cursor-pointer"
        :key="task.id"
      >
        <div class="w-full">
          {{ task.title }}
        </div>

        <div class="flex gap-1">
          <button @click.stop="handelDelete(task.id)" class="btn btn-error">
            <i class="fa-solid fa-trash-can fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <RouterView />
</template>
