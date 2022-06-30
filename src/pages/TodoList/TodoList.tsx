import  React from "react";

import { Todo } from "@redux/slice/todo/__types__";
import TodoItem from "@shared/TodoItem";

interface TodoListProps {
    todos: Todo[],
    createTodo: (title: string) => void
}


const TodoList: React.FC<TodoListProps> = ({todos, createTodo}) => {
    const [title, setTitle] = React.useState('')

    const changeTitle = (text: string) => setTitle(text)

    
    return (
        <div>
            <div> 
                <label htmlFor="">Create todo Item:</label> 
                <input placeholder="todo title...." onChange={(e)=>changeTitle(e.target.value)}/>

                <button onClick={()=>createTodo(title)}>Create</button>
            </div>
            <ul>
                {
                    todos.map(todoItem=> <TodoItem key={todoItem.id} {...todoItem}/>)
                }
            </ul>
        </div>
    )
}

export default TodoList