import React from 'react';

const Form = (props) => {
    const inputTextHandler = (e) => {
        props.setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        props.setTodos([
            ...props.todos, 
            {
                text: props.inputText, 
                completed: false, 
                id: Math.random() * 1000 
            }
        ]);
        props.setInputText("");
    }

    const statusHandler = (e) => {
        props.setStatus(e.target.value);
    };

    const dropDownSelection = {
        disabled: props.status === 'all' ? 'selected' : null
    }

    return (
        <form>
            <input 
                type="text" 
                className="todo-input" 
                onChange={inputTextHandler} 
                value={props.inputText} 
            />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler} value={props.status}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;