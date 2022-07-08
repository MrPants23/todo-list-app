import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?? []);
  const [status, setStatus] = useState('all');

  useEffect(() => {
    // When adding a new todo set the status back to 'all' to ensure users can see their new item
    setStatus('all');

    // Capture the state of todos in localStorage
    saveLocalTodos(todos);
  }, [todos]);

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  return (
    <div className="App">
      <header>
        <h1>Diego's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        status={status} />
    </div>
  );
}

export default App;