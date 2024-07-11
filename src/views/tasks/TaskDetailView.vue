<script setup>
import { useRoute, useRouter } from "vue-router";
import { onBeforeMount, ref } from "vue";
import { useTasks } from "@/stores/tasks.js";

let  tasks  = useTasks();
let task = ref(null);
let route = useRoute();
let router = useRouter();

let { id } = route.params;

onBeforeMount(() => {
  task.value = tasks.tasks.find((task) => task.id === parseInt(id));
});

let handelToggle = () => {
  task.value.completed = !task.value.completed;
  localStorage.setItem("tasks", JSON.stringify(tasks.tasks));
  router.push("/tasks");
};

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
  <div class="container mx-auto mt-10">
    <div class="card bg-base-200 border-amber-200 p-5">
      <h2 class="text-2xl font-bold mb-5">{{ task.title }}</h2>
      <p class="mb-5">{{ task.description }}</p>
      <div class="flex gap-2">
        <button
          @click="router.push(`/task/edit/${task.id}`)"
          v-if="!task.completed"
          class="btn btn-warning"
        >
          <i class="fa-solid fa-pen-to-square fa-lg"></i> Edit
        </button>

        <button 
        @click="handelDelete(task.id)" 
        class="btn btn-error">
          <i class="fa-solid fa-trash-can fa-lg"></i> Delete
        </button>

        <div v-if="!task.completed">
          <button @click="handelToggle" class="btn btn-success">
            <i class="fa-solid fa-square-check fa-lg"></i> mark it as completed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
