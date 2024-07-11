import { createRouter, createWebHistory } from 'vue-router'
import AddTaskView from '@/views/tasks/create.vue'
import TasksView from '@/views/tasks/tasks.vue'
import TaskView from '@/views/tasks/task.vue'
import EditTaskView from '@/views/tasks/edit.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView
    },{
      path: '/task/create',
      name: 'addTask',
      component: AddTaskView
    },
    {
      path: '/task/:id',
      name: 'task',
      component: TaskView
    },
    {
      path: '/task/edit/:id',
      name: 'editTask',
      component: EditTaskView
    }
    
  ]
})

export default router
