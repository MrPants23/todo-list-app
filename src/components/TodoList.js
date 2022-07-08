import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    props.todos.filter((todo) => {
                        switch(props.status) {
                            case 'all':
                                return todo;
                            case 'completed':
                                if(todo.completed) {
                                    return todo;
                                }
                                break;
                            case 'uncompleted':
                                if(!todo.completed) {
                                    return todo;
                                }
                                break;
                            default:
                                return todo;
                        }
                    }).map((todo) => {
                        return <Todo 
                            key={todo.id}
                            text={todo.text} 
                            completed={todo.completed}
                            id={todo.id}
                            setTodos={props.setTodos}
                            todos={props.todos} />
                })} 
            </ul>
        </div>
    );
}

export default TodoList;