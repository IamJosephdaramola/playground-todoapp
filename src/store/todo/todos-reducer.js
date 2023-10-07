const SET_TODO = 'SET_TODO';
const ADD_TODOS = 'NEW_TODO';
const REMOVE_TODO = ' REMOVE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';

const actionTypes = {
    SET_TODO,
    ADD_TODOS,
    REMOVE_TODO,
    UPDATE_TODO,
};

const initialState = {
    todos: [],
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_TODO:
            return {
                ...state,
                todos: action.payload.data,
            };

        case actionTypes.ADD_TODOS:
            return {
                ...state,
                todos: [...action.payload, ...state.todos],
            };

        case actionTypes.REMOVE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(
                    (todo) => todo.id !== action.payload.id,
                ),
            };
        }

        case actionTypes.UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            value: action.payload.newValue,
                        };
                    }
                    return todo;
                }),
            };

        default:
            return state;
    }
};
export { initialState, todoReducer, actionTypes };
