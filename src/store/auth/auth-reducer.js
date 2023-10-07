const GET_SESSION = 'GET_SESSION';
const LOGOUT = 'LOGOUT';

const actionTypes = {
    GET_SESSION,
    LOGOUT
}

const initialState = {
    todos: [],
    authenticated: false,
    user: null
}

const authReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.GET_SESSION:
            return {
                ...state,
                user: action.payload.session.user ,
                authenticated: !!action.payload.session.access_token
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                user: null,
                authenticated: false
            }
        default:
            return state

    }
}

export { authReducer, initialState, actionTypes }

