<script setup>
import { useTasks } from "@/stores/tasks.js";
import {useRouter} from "vue-router";
import { onMounted, ref } from "vue";


let router = useRouter();

let tasks = useTasks();

let taskTitle = ref("");
let taskDescription = ref("");


let handelAddTask = () => {
  if (!taskTitle.value.trim() || !taskDescription.value.trim() ) {
    swal({
      title: "title and description are required!",
      type: "error",
      confirmButtonText: "ok"
    });
    return;
  }
  if (taskTitle.value.length < 3) {
    swal({
      title: "title must be at least 3 characters!",
      type: "error",
      confirmButtonText: "ok"
    });
    return;
  }
  if (taskDescription.value.length < 10) {
    swal({
      title: "description must be at least 10 characters!",
      type: "error",
      confirmButtonText: "ok"
    });
    return;
  }

  tasks.addTask(taskTitle.value, taskDescription.value);
  localStorage.setItem("tasks", JSON.stringify(tasks.tasks));
  swal({
      title: "task added!",
      type: "success",
      confirmButtonText: "ok"
    });
  router.push("/tasks");
};



</script>

<template>


    <form @submit.prevent="handelAddTask" class="grid gap-5 mx-4">
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">title:</span>
        </div>
        <input
          type="text"
          class="input input-bordered w-full"
          v-model="taskTitle"
        />
      </label>

      <label class="form-control">
        <div class="label">
          <span class="label-text">description:</span>
        </div>
        <textarea
          class="textarea textarea-bordered h-24"
          v-model="taskDescription"
        />
      </label>

      <button @click.stop="tt" class="btn btn-success mx-10">Add</button>
    </form>


</template>
