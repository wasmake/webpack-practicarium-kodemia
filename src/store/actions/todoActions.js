export const SET_TODOS = "SET_TODOS";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const ACTIVE_TODO = "ACTIVE_TODO";
export const EDIT_TODO = "EDIT_TODO";


export const setTodosAction = (todos) => dispatch => {
    dispatch({
        type: SET_TODOS,
        payload: todos
    })
}

export const removeTodoAction = (id) => dispatch => {
    dispatch({
        type: REMOVE_TODO,
        payload: {
            id
        }
    })
}