import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(savedTasks);
  
  

  // useEffect(() => {
  //    savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  //   setTasks(savedTasks);
  // }, []);
  


  useEffect(() => {
    // const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
  }, [tasks]);

  

  const addTask = async (task) => {      
   
     await setTasks(()=>[...tasks, { id: Date.now(), text: task, completed: false }],
     
    );
     
    }
  
      
    


  const toggleTaskCompletion = async (id) => {
     setTasks(()=>tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
    
     
    
  };

  const deleteTask = async (id) => {
     setTasks(()=>tasks.filter(task => task.id !== id));
      
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        toggleTaskCompletion={toggleTaskCompletion} 
        deleteTask={deleteTask} 
      />
    </div>
  );
}

export default App
