<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTasks } from "@/stores/tasks.js";

let route = useRoute();
let router = useRouter();
let { id } = route.params;

let tasks = useTasks();

let task = tasks.tasks.find((task) => task.id === parseInt(id));

let taskTitle = ref(task.title);
let taskDescription = ref(task.description);

let handleEditTask = () => {
  if (!taskTitle.value.trim() || !taskDescription.value.trim()) {
    swal({
      title: "Title and description are required!",
      type: "error",
      confirmButtonText: "Ok",
    });
    return;
  }
  if (taskTitle.value.length < 3) {
    swal({
      title: "Title must be at least 3 characters!",
      type: "error",
      confirmButtonText: "Ok",
    });
    return;
  }
  if (taskDescription.value.length < 10) {
    swal({
      title: "Description must be at least 10 characters!",
      type: "error",
      confirmButtonText: "Ok",
    });
    return;
  }

  tasks.editTask(id, taskTitle, taskDescription);

  swal({
    title: "Task updated!",
    type: "success",
    confirmButtonText: "Ok",
  });

  console.log(tasks);

  localStorage.setItem("tasks", JSON.stringify(tasks.tasks));
  router.go(-1);
};

function goBack() {
  router.go(-1);
}
</script>

<template>
  <form @submit.prevent="handleEditTask" class="grid gap-5 mx-4">
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">Title:</span>
      </div>
      <input
        type="text"
        class="input input-bordered w-full"
        v-model="taskTitle"
      />
    </label>

    <label class="form-control">
      <div class="label">
        <span class="label-text">Description:</span>
      </div>
      <textarea
        class="textarea textarea-bordered h-24"
        v-model="taskDescription"
      />
    </label>

    <button type="submit" class="btn btn-warning mx-10">Update</button>
  </form>
  <div class="grid mt-5 mx-4">
    <button @click.stop="goBack" class="btn btn-error btn-outline mx-10">
      Cancel
    </button>
  </div>
</template>
