import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'
const App= () =>  {//this is JS
  const [showAddTask,setShowAddTask] = useState(false)
  // const [addCloseColor,setAddCloseColor] = useState('green')
  // const [addCloseBTN,setAddCloseBTN] = useState('Add Task')
  const [tasks,setTasks] = useState([
    {
      "id": 1,
      "text": "test",
      "other": "no-show",
      "day": "monday",
      "reminder": true
    },
    {
      "text": "Test4",
      "day": "Wednesday",
      "reminder": false,
      "id": 2
    },
    {
      "text": "Task6",
      "day": "Thursday",
      "reminder": true,
      "id": 3
    }
  ])   

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
    console.log('DELETE',id);
  }

  //toggle reminder
  const toggleReminder = (id)=>{
    setTasks(tasks.map((task)=>task.id === id ? {...task,reminder: !task.reminder}:task))
    console.log('Toggle',id)
  }

  //add task
  const addTask = (newTasks)=>{
    setTasks([...newTasks])
    console.log(tasks,newTasks)
  }
  
  //toggle Add task.
  const toggleShowAddTask = ()=>{
    setShowAddTask(!showAddTask)
    // setAddCloseColor(addCloseColor ==='green'?'red':'green') // didnt need to set props in parent componenet
    // setAddCloseBTN(addCloseBTN === 'Add Task'? 'Close':'Add Task')
  }

  return (//everything inside here is JSX. Roots to root div in index.html
    <div className="container">
      {/* <Header showAddTask = {showAddTask} color = {addCloseColor} title = {addCloseBTN} onShowAddTask = {()=>toggleShowAddTask()} /> MY WAY*/}
      <Header showAddTask = {showAddTask} onShowAddTask = {()=>toggleShowAddTask()}/>
      {showAddTask && <AddTask onAddTask = {addTask} tasks = {tasks} setTasks = {setTasks}/>} {/**like terniary without**/}
      {tasks.length>0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>: 'No Tasks To Show'}
    </div>
  );
}


export default App;
