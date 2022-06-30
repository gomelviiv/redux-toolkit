import React from "react";

import { useAppDispatch } from "@redux/hooks";
import { removeTodo, toggleComplete } from "@redux/slice/todo/todoSlice";

import TodoItem from "./TodoItem";

interface TodoItemContainerProps  {
    id: string,
    title: string,
    completed: boolean,
}


const TodoItemContainer: React.FC<TodoItemContainerProps> = (props: TodoItemContainerProps) => {
    const dispatch = useAppDispatch()

    const removeTodoById = (id: string) => dispatch(removeTodo(id))
    
    const toggleCompleteById =  (id: string) => dispatch(toggleComplete(id))

    return (
        <TodoItem removeTodoById={removeTodoById} toggleCompleteById={toggleCompleteById} {...props}/>
    )
}

export default TodoItemContainer