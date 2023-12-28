import React, { useState } from 'react';
import './TodoList.css'; // Import the CSS file

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, description: newTaskDescription, status: 'not completed' }]);
      setNewTask('');
      setNewTaskDescription('');
    }
  };

  const updateTask = (id, newText, newDescription, newStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, text: newText, description: newDescription, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className='taskInput'
        />
        <input
          value={newTaskDescription}
          onChange={e => setNewTaskDescription(e.target.value)}
          placeholder="Enter task description"
          className='taskDesc'
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="todo-list">
        {tasks.map(task => (
          <li key={task.id} className={`task-card ${task.status}`}>
            <h3>{task.text}</h3>
            <p>{task.description}</p>
            <div>
              <span>Status: {task.status}</span>
              <div className="button-container">
                <button onClick={() => updateTask(task.id, prompt('Update task:', task.text), prompt('Update description:', task.description), prompt('Update status:', task.status))}>
                  Update
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
