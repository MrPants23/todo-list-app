import React from 'react';

const Todo = (props) => {
    const deleteHandler = () => {
        props.setTodos(props.todos.filter(el => el.id !== props.id));
    };

    const completeHandler = () => {
        props.setTodos(props.todos.map((item) => {
            if (item.id === props.id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        }));
    };

    return (
        <div className='todo'>
            <li className={`todo-item ${props.completed ? 'completed' : ''}`}>{props.text}</li>
            <button className='complete-btn' onClick={completeHandler}>
                <i className='fas fa-check'></i>
            </button>
            <button className='trash-btn' onClick={deleteHandler}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
};

export default Todo;