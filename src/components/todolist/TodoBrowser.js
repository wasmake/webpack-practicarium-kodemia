import React, { useContext, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CreateTodo from "./CreateTodo";

import * as todoActions from '../../store/actions/todoActions';
import { getAsyncData, removeAsyncTodo } from "../../utils/backendFetcher";

export default function TodoBrowser() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todoReducer.todos);

    const navigate = useNavigate();

    useEffect(() => {
        getAsyncData("todos").then((data) => {
            dispatch(todoActions.setTodosAction(data));
        });
    }, []);

    function removeTodo(id) {
        console.log(id);
        removeAsyncTodo(id).then((data) => {
            dispatch(todoActions.removeTodoAction(id));
        });
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
                todos.map((todo, index) => {
                    return <TodoItem key={index} data={todo} remove={removeTodo} edit={editTodo} />
                })
            }
        </div>
    );
}