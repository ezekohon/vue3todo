<script setup lang="ts">
import Todo from './Todo.vue'
import { storeToRefs } from 'pinia'
import { useTodos } from './../store/useTodos'
const { currentTodoList } = storeToRefs(useTodos())

</script>

<template>
  <div class="list">
   <Todo v-for="todo in currentTodoList" :todo="todo"></Todo>
  </div>
</template>

<style>
.list { 
    /* width: 450px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
