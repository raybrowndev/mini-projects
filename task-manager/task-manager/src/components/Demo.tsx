import React, { useState } from 'react';

//component imports
import DeleteButton from './DeleteButton';

function Demo() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
  
    const handleChange = (event) => {
      setTask(event.target.value);
    };
  
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleClick();
      }
    };
  
    const handleClick = () => {
      if (task.trim() !== '') {
        setTasks([...tasks, task]);
        setTask('');
      }
    };


  const handleDeleteTodo = (index) => {
    const updatedTodos = [...tasks];
    updatedTodos.splice(index, 1);
    setTasks(updatedTodos);
  };

  

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Add a task"
      />
      <button onClick={handleClick}>Add</button>


      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}

                <DeleteButton onClick={() => handleDeleteTodo(index)}>X</DeleteButton>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Demo;
