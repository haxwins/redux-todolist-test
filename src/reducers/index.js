import { combineReducers } from 'redux';
import TodolistReducer  from './Todolistreducer';

const rootReducer = combineReducers({
    todolist: TodolistReducer
});

export default rootReducer;