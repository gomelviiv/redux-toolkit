import React from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { addTodo } from "@redux/slice/todo/todoSlice";

import TodoList from "./TodoList";


const TodoListContainer: React.FC = () => {
    const todos = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch()

    const createTodo = (title:string) => dispatch(addTodo(title))
    
    return (
            <TodoList todos={todos.list} createTodo={createTodo}/>
       )
}

export default TodoListContainer