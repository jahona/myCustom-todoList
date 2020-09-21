import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import TodoList from '@/components/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/todolist',
      name: 'TodoList',
      component: TodoList
    },
  ]
})
