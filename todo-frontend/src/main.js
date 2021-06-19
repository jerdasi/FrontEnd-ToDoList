import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import TodoList from './components/TodoList.vue'
import User from './components/User.vue'
import Auth from './components/Auth.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Auth},
        { path: '/todo', component: TodoList},
        { path: '/user', component: User}
    ]
})


createApp(App).use(router).mount('#app')
