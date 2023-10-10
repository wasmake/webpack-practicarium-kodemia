import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as todoActions from '../../store/actions/todoActions';

export default function CreateTodo() {
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todoReducer.todos);
    const todoInput = useRef(null);

    function createTodo() {
        const todoName = todoInput.current.value;

        const newTodo = {
            id: todos.length,
            name: todoName,
            description: "No description",
            done: false
        };

        dispatch({
            type: todoActions.ADD_TODO,
            payload: newTodo
        });
    }

    return (
        <div className="container d-flex flex-row">
            <input ref={todoInput} type="text" className="form-control" placeholder="Create a new todo" />
            <button className="btn btn-primary" onClick={() => createTodo()}>Create</button>
        </div>
    )
}