<template>
  <router-link to="/" :class="biasa-saja">Halaman Login</router-link>
  &nbsp
  <router-link to="/todo">Halaman Todo</router-link>
  &nbsp
  <router-link to="/user">Halaman User</router-link>
  <router-view></router-view>
  <h1>Tes</h1>
</template>

<script setup>
import TodoList from './components/TodoList.vue'
import User from './components/User.vue'

</script>
<style module>
  * {
    margin: 0 auto;
  }
  a{
    text-decoration: none;
    color: #61dafb;
    padding: 0 100px;
    border: 1px solid black;
    font-size: 1.3em;
    display: inline-block;
    margin: 10px 0px;
    background-color: #282c34;
  }
  a:hover{
    color: white;
  }
</style>


