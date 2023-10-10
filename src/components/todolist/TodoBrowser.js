import React, { useContext, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CreateTodo from "./CreateTodo";

import * as todoActions from '../../store/actions/todoActions';

export default function TodoBrowser() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todoReducer.todos);

    const navigate = useNavigate();

    function removeTodo(id) {
        dispatch(todoActions.removeTodoAction(id));
    }

    function editTodo(id) {
        // Redirect to edit page
        navigate(`/todolist/edit/${id}`);
    }

    return (
        <div className="TodoBrowser container card">
            <div className="text-center pt-3">
                <h1>Todo List</h1>
                <CreateTodo />
            </div>
            {
                todos.map((todo) => {
                    return <TodoItem key={todo.id} data={todo} remove={removeTodo} edit={editTodo} />
                })
            }
        </div>
    );
}