import { defineStore } from 'pinia';
import Todo from './../models/todo';
import { getAllTodos, addTodo, updateTodo } from './../api/todos.js'

export type RootState = {
    todos: Todo[];
}

export const useTodos = defineStore('main', {
    state: () => ({
        todos: []
    } as RootState),
    getters: {
        sortedTodos: (state) => state.todos.sort((a,b) => (a.id as number) - (b.id as number))
    },
    actions: {
        async getAllTodos() {
            this.todos = await getAllTodos() as Todo[];
        },
        async createTodo(todo: Todo) {
            await addTodo(todo);
        },
       async updateTodo(id: number|undefined, is_done: boolean) {
            console.log(id,is_done);
        
            await updateTodo(id, is_done)
       }
    }
})