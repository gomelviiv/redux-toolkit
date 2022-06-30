import React from "react";

interface TodoProps  {
    id: string,
    title: string,
    completed: boolean,

    removeTodoById: (id: string) => void,
    toggleCompleteById: (id: string) => void,
}

const TodoItem: React.FC<TodoProps> = ({id, title, completed, removeTodoById, toggleCompleteById}) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={()=>toggleCompleteById(id)}
            />
            <span onClick={()=>removeTodoById(id)}>{title}</span>
        </li>
    )
}

export default TodoItem