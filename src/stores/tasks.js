import { defineStore } from 'pinia'

export const useTasks = defineStore('tasks', {
  state: () => ({
    tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : 
    [
      {
        id: 1,
        title: "Set Up a Vue.js Project",
        description:
          "Install Vue CLI and set up a new Vue.js project. Ensure that the project structure follows best practices and includes the necessary dependencies.",
        completed: true,
      },
      {
        id: 2,
        title: "Create a Reusable Component",
        description:
          "Develop a reusable Vue.js component for a common UI element (e.g., a button, card, or modal). Ensure that the component is customizable through props and emits events for parent component interaction.",
        completed: true,
      },
      {
        id: 3,
        title: "Implement Vue Router",
        description:
          "Set up Vue Router to manage navigation within the Vue.js application. Create routes for different pages and implement navigation guards for protected routes.",
        completed: false,
      },
      {
        id: 4,
        title: "State Management with Pinia",
        description:
          "Integrate Pinia for state management in the Vue.js application. Define the state, mutations, actions, and getters. Demonstrate how to manage global state and interact with Pinia from components.",
        completed: false,
      },
      {
        id: 5,
        title: "Create a Custom Directive",
        description:
          "Develop a custom Vue.js directive for a specific functionality (e.g., tooltip, click outside detection). Explain how to register the directive and use it in components.",
        completed: false,
      },
    ],
  }),
  getters: {
    all: (state) => state.tasks.reverse(),
    inProgress: (state) => state.tasks.filter((task) => !task.completed).reverse(),
    completed: (state) => state.tasks.filter((task) => task.completed).reverse(),
  },

  actions: {
    addTask(title, description) {
      this.tasks.push({ id: this.tasks.length + 1, title, description: description, completed: false })
    },
    toggleTask(id) {
      const task = this.tasks.find((task) => task.id === id)
      task.completed = !task.completed

    },
    editTask(id, title, description) {
      this.tasks.map(t => {
        if (t.id === parseInt(id)) {
          t.title = title.value;
          t.description = description.value;
        }
        return t;
      });
    },
    deleteTask(id) {
      const index = this.tasks.findIndex((task) => task.id === id)
      this.tasks.splice(index, 1)
    },
  },

})


