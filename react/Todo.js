import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Add a new todo
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  // Toggle todo completion status
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Start editing a todo
  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  // Save edited todo
  const saveEdit = (id) => {
    if (editText.trim()) {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: editText } : todo
      ));
    }
    setEditingId(null);
  };

  // Handle keyboard events during editing
  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') saveEdit(id);
    if (e.key === 'Escape') setEditingId(null);
  };

  return (
    <div style={{ 
      maxWidth: '500px', 
      margin: '20px auto', 
      padding: '20px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      borderRadius: '8px'
    }}>
      <h1 style={{ textAlign: 'center' }}>Todo App</h1>
      
      {/* Add Todo Input */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="What needs to be done?"
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        <button 
          onClick={addTodo}
          style={{
            padding: '10px 15px',
            marginLeft: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li 
            key={todo.id} 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              margin: '5px 0',
              backgroundColor: '#f9f9f9',
              borderRadius: '4px'
            }}
          >
            {/* Checkbox for completion */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              style={{ marginRight: '10px' }}
            />
            
            {/* Todo Text or Edit Input */}
            {editingId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, todo.id)}
                onBlur={() => saveEdit(todo.id)}
                autoFocus
                style={{
                  flex: 1,
                  padding: '5px',
                  fontSize: '16px'
                }}
              />
            ) : (
              <span 
                onDoubleClick={() => startEdit(todo)}
                style={{ 
                  flex: 1,
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#888' : '#333'
                }}
              >
                {todo.text}
              </span>
            )}
            
            {/* Action Buttons */}
            <div>
              {editingId !== todo.id && (
                <button
                  onClick={() => startEdit(todo)}
                  style={{
                    margin: '0 5px',
                    padding: '5px 10px',
                    backgroundColor: '#2196F3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;