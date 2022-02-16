// using Hooks to setState. import useState 
import { useState } from 'react'
import MyHeader from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState (false)
// using hooks to set state inside component
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text:'appointment',
      day:'feb 7',
      reminder:true,
    },
    {
      id: 2,
      text:'gym',
      day:'feb 8',
      reminder:true,
    },
    {
      id: 3,
      text:'groceries',
      day:'feb 9',
      reminder:false,
    },
  ])

// Add Task. id is random # from 0-10000(unique id), newTask is object with key id, value task. setTasks is called to spread previous tasks plus the newTask
const addTask = (task) => {
  const id=Math.floor(Math.random()*10000)+1
  console.log(id)
  const newTask = {id, ...task }
  setTasks([...tasks, newTask])
}

// Delete Task function. We pass down the deleteTask function to the components in Tasks and Task as props. 
// we call filter method to show only tasks with id !== id. (we take out the one that matches because we're deleting it)
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=> task.id !== id))
}

// Toggle Reminder function. 
// call map method. if task.id equals the id, changes reminder to the opposite of what it was previously. otherwise just stays same
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
    task.id === id ? {...task, reminder: !task.reminder } : task
    )
  )
}

  return (
    <div className="container">
{/* MyHeader component called. pass onAdd function to button to change showAddTask using setShowAddTask to update state. pass prop showAdd that tells state of showAddTask true/false.  */}
      <MyHeader onAdd={() => setShowAddTask(!showAddTask)} showAdd ={showAddTask}/>
{/* AddTask component called. pass prop onAdd which calls addTask component. AddTask is only shown if setShowAddTask is true. && sign is like if statement without else. */}
      {showAddTask && <AddTask onAdd = {addTask}/>}
{/* displays tasks (if there are any), and events onDelete, onToggle. */}
      {tasks.length>0 
      ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> 
      : 'No Tasks to show'}
    </div>
  );
}



export default App;
