import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    todos: [],
    loading: false,
    error: null
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload.todos;
        },
        addTodo: (state, action) => {
            state.todos = [...action.payload.todos, ...state.todos];
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload.todoId,
            );
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.todoId) {
                    return {
                        ...todo,
                        value: action.payload.newValue,
                    };
                }
                return todo;
            })
        },
        setLoading: (state, action) => {
            state.loading = action.payload.loading
        }
    }
})

const { setLoading, addTodo, updateTodo, setTodos, removeTodo } = todosSlice.actions;

const todosReducer = todosSlice.reducer;

export { setLoading, addTodo, updateTodo, setTodos, removeTodo, todosReducer }