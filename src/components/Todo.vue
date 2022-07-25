<script setup lang="ts">
import Todo from '../models/todo';
import { ref } from 'vue';
import { useTodos } from './../store/useTodos';

interface Props {
  todo: Todo
}

const props = defineProps<Props>();
const { updateTodo } = useTodos();
const { deleteTodo } = useTodos();

let hover = ref<Boolean>(false);

const toggleTodo = () => {
  updateTodo(props.todo.id, !props.todo.is_done)
  props.todo.is_done = !props.todo.is_done
}

const removeTodo = async (id: number|undefined) => {
  await deleteTodo(id);
}
</script>

<template>
  <div class="todo-card" @mouseover.native="hover = true" @mouseleave.native="hover = false">
    <div class="todo-card__content">
      <input class="todo-card__checkbox" type="checkbox" id="checkbox" :checked="props.todo.is_done" @click="toggleTodo()" />
      <p class="todo-card__description" :class="{ 'todo-card__description--through': props.todo.is_done }">{{ props.todo.description }}</p>
      <button class="todo-card__x" v-show="hover" @click="removeTodo(props.todo.id)">X</button>
    </div>
  </div>
</template>

<style>
.todo-card {
  width: 100%;
  max-width: 600px;
  height: 50px;
  box-shadow: 3px 10px 20px rgba(246, 246, 246, 0.2);
  border: 0;
  border-radius: 3px;
  margin-bottom: 1rem;
}

.todo-card__content {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.todo-card__checkbox {
  width: auto;
  margin-right: 1rem;
}

.todo-card__description {
  color: rgb(204, 198, 198);
}

.todo-card__description--through {
  text-decoration:line-through;
}

.todo-card__x{
  margin-left: auto;
  margin-right: 1rem;
  border: 0;
}
</style>
