<template>
    <div class="container">
        <div class="todo-card">
            <div class="todo-card__content">
                <p class="filter-card__left">{{ todosLeftText }}</p>
                <div>
                    <div class="inline-flex items-center -space-x-px text-xs rounded-md">
                        <button class="filter-button" type="button" @click="setCurrentTodoList(currentTodoList.All)">
                            All
                        </button>

                        <button class="filter-button" type="button" @click="setCurrentTodoList(currentTodoList.Active)">
                            Active
                        </button>

                        <button class="filter-button" type="button" @click="setCurrentTodoList(currentTodoList.Completed)">
                            Completed
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTodos } from './../store/useTodos'
import { computed } from 'vue';
import { currentTodoList } from '../enums/currentTodoList';
const { todosCount } = storeToRefs(useTodos())
const { setCurrentTodoList } = useTodos();


const todosLeftText = computed(() => todosCount.value > 1 ? `${todosCount.value} todos left` : `${todosCount.value} todo left`)
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.todo-card {
    width: 100%;
    max-width: 600px;
    height: 35px;
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
    justify-content: space-between;
}

.filter-button {
    border: 0;
}

.filter-button:focus {
    border: 1px solid white;
}

.filter-card__left {
    margin-left: 1rem;
}
</style>