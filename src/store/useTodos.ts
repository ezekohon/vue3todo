import { defineStore } from 'pinia';
import Todo from './../models/todo';
import { getAllTodos, addTodo, updateTodo, deleteTodo } from './../api/todos.js'
import { currentTodoList } from './../enums/currentTodoList'

export type RootState = {
    todos: Todo[];
    todoList: currentTodoList;
}

export const useTodos = defineStore('main', {
    state: () => ({
        todos: [],
        todoList: currentTodoList.All,
    } as RootState),
    getters: {
        sortedTodos: (state): Todo[] => state.todos.sort((a,b) => (a.id as number) - (b.id as number)),
        todosCount: (state): number => state.todos.filter((todo) => !todo.is_done).length,
        activeTodos(): RootState['todos'] {
            return this.sortedTodos.filter((todo) => !todo.is_done)
        },
        completedTodos(): RootState['todos'] {
            return this.sortedTodos.filter((todo) => todo.is_done)
        },
        currentTodoList(): RootState['todos'] {
            return this.todoList === currentTodoList.All ? this.sortedTodos : this.todoList === currentTodoList.Active ? this.activeTodos : this.completedTodos;
        }
    },
    actions: {
        async getAllTodos() {
            this.todos = await getAllTodos() as Todo[];
        },
        async createTodo(todo: Todo) {
            await addTodo(todo);
        },
        async updateTodo(id: number|undefined, is_done: boolean) {
            await updateTodo(id, is_done)
        },
        async deleteTodo(id: number|undefined) {
            await deleteTodo(id);
            this.todos = this.todos.filter(elem => elem.id !== id)
        },
        setCurrentTodoList(list: currentTodoList) {
            this.todoList = list;
        }
    }
})