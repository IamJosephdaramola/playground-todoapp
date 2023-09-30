import {
    LOGIN,
    LOG_OUT,
    ON_ADD_TODO,
    ON_REMOVE_TODO,
    ON_UPDATE_TODO,
} from './action';

const reducer = (state, action) => {
   if (action.type === LOGIN) {
       const { session, user } = action.payload;
       return {
           ...state,
           session,
           authenticated: true,
           user,
       };
   }
    if (action.type === LOG_OUT) {
        return {
            ...state,
            session: null,
            authenticated: false,
            user: null,
        };
    }

    if (action.type === ON_ADD_TODO) {
        const { todo } = action.payload;
        return {
            ...state,
            todos: [...state.todos, todo],
        };
    }

    if (action.type === ON_REMOVE_TODO) {
        const { id } = action.payload;
        const updatedTodos = state.todos.filter((todo) => todo.id !== id);
        return {
            ...state,
            todos: updatedTodos,
        };
    }

    if (action.type === ON_UPDATE_TODO) {
        const { id, newValue } = action.payload;
        const updatedTodos = state.todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    value: newValue,
                };
            }
            return todo;
        });
        return {
            ...state,
            todos: updatedTodos,
        };
    }

    return state;
};

export default reducer;
