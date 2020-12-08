<template>
    <div>
        <h2>todo test</h2>
        <AddTodo
                @add-todo="addTodo"
        />
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not completed</option>
        </select>
        <hr>
        <Loader v-if="loading"/>
        <TodoList
                v-else-if="filteredTodos.length"
                v-bind:todos="filteredTodos"
                @remove-todo="removeTodo"
        />
        <p v-else> No todo</p>
    </div>
</template>

<script>
    import TodoList from "../components/todos/TodoList";
    import AddTodo from "../components/todos/AddTodo";
    import Loader from "../components/todos/Loader";

    export default {
        name: 'Todos',
        components: {
            TodoList,
            AddTodo,
            Loader
        },
        data() {
            return {
                todos: [
                    // {id: 1, title: "Купить хлеб", completed: false},
                    // {id: 2, title: "Купить молоко ", completed: false},
                    // {id: 3, title: "Купить яички", completed: false},
                ],
                loading: true,
                filter: 'all'
            }
        },
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        this.todos = json;
                        this.loading = false
                    }, 1000)
                })
        },
        methods: {
            removeTodo(id) {
                this.todos = this.todos.filter(t => t.id !== id)
            },
            addTodo(todo) {
                this.todos.push(todo)
            }
        },
        watch: {
            filter(value) {
                console.log(value)
            }
        },
        computed: {
            filteredTodos() {
                if (this.filter === 'all') {
                    return this.todos
                }
                if (this.filter === 'completed') {
                    return this.todos.filter(t => t.completed)
                }
                if (this.filter === 'not-completed') {
                    return this.todos.filter(t => !t.completed)
                }
            }
        }
    }
</script>