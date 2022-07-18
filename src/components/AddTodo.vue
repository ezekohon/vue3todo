<template>
    <div class="add-todo text-center">
        <input type="text" class="add-todo__input" v-model="newTodo" placeholder="Add todo" @keydown="onEnter"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTodos } from './../store/useTodos';
import Todo from '../models/todo';
import { storeToRefs } from 'pinia';
const { createTodo, getAllTodos } = useTodos();
const { todos } = storeToRefs(useTodos())

let newTodo = ref<String>("")

const onEnter = async(e: KeyboardEvent) => {
    if (e.key === 'Enter') {
        const todo: Todo = {
            description: newTodo.value as string,
            is_done: false,
        }
        newTodo.value = "";
        todos.value.push(todo);
        await createTodo(todo);
    }
}

</script>

<style scoped>
.add-todo {
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
}

.add-todo__input {
    color: rgb(156, 189, 222);
}
</style>