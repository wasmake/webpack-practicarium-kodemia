import todoReducer from "./reducers/todoReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    todoReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));