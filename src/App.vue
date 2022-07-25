<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodos } from './store/useTodos'
import TodoList from './components/TodoList.vue'
import AddTodo from './components/AddTodo.vue'
import FiltersCard from './components/FiltersCard.vue'

const { getAllTodos } = useTodos();

onMounted(async () => {
  await getAllTodos();
})
</script>

<template>
  <h1 class="title">TODOS</h1>
  <div class="container">
    <AddTodo></AddTodo>
    <TodoList></TodoList>
    <FiltersCard></FiltersCard>
  </div> 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title {
  color: rgb(156, 189, 222);
}
</style>
