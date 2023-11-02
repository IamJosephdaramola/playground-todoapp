import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: { todos: [] },
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
        addTodo: (state, action) => {
            // const todosToAdd = Array.isArray(action.payload)
            //     ? action.payload
            //     : [action.payload];
            state.todos = [...action.payload, ...state.todos];
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload.id,
            );
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        value: action.payload.newValue,
                    };
                }
                return todo;
            });
        },
    },
});

const { setTodos, addTodo, removeTodo, updateTodo } = todoSlice.actions;

const todoReducer = todoSlice.reducer;

export { setTodos, addTodo, removeTodo, updateTodo, todoReducer };
