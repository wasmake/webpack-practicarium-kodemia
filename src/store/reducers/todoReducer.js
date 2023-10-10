import * as actionTypes from '../actions/todoActions';

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.SET_TODOS:
            return {
                ...state,
                todos: action.payload
            };
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case actionTypes.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.payload.id)
            };
        case actionTypes.EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
            };
        default:
            return state;
    }
}

export default todoReducer;