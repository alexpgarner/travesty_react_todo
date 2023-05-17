import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import TaskDetails from './components/TaskDetails'

import {useState,useEffect} from 'react'

const App= () =>  {//this is JS
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([])
  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  },[])//empty array for dependencies?
  
  //fetch tasks
  const fetchTasks = async ()=>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    //setTasks(data)
    //console.log(data)
    return data;
  }

    //fetch task
    const fetchTask = async (id)=>{
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      //setTasks(data)
      //console.log(data)
      return data;
    }
  //Found a btter way to handle button without having more props to pass from parent
  // const [addCloseColor,setAddCloseColor] = useState('green')
  // const [addCloseBTN,setAddCloseBTN] = useState('Add Task')
 
  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
    {
        method: 'DELETE'
    })  
    setTasks(tasks.filter((task)=> task.id !== id))
    console.log('DELETE',id);
  }

  //toggle reminder
  const toggleReminder = async (id)=>{
    //Travesty used id to fetch id to update toggle from server. Why not just filter our tasks in browser to avoid extra server requests?
    // const taskToToggle = await fetchTask(id);
    // const updatedTask = await {...taskToToggle,reminder: !taskToToggle.reminder}
    const taskToToggle = tasks.filter((task)=> task.id === id)[0];
    const updatedTask =  {...taskToToggle,reminder: !taskToToggle.reminder}
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    setTasks(tasks.map((task)=>task.id === id ? {...task,reminder: !task.reminder}:task))
    console.log('Toggle',id)
  }

  //add task
  const addTask = async (task)=>{
    const res = await fetch('http://localhost:5000/tasks',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    const newTask = await res.json();
    setTasks([...tasks,newTask])
    // console.log(tasks,newTasks)
  }
  
  //toggle Add task.
  const toggleShowAddTask = ()=>{
    setShowAddTask(!showAddTask)
    // setAddCloseColor(addCloseColor ==='green'?'red':'green') // didnt need to set props in parent componenet
    // setAddCloseBTN(addCloseBTN === 'Add Task'? 'Close':'Add Task')
  }

  return (//everything inside here is JSX. Roots to root div in index.html
    <Router>
      <div className="container">
        {/* <Header showAddTask = {showAddTask} color = {addCloseColor} title = {addCloseBTN} onShowAddTask = {()=>toggleShowAddTask()} /> MY WAY*/}
        <Header showAddTask = {showAddTask} onShowAddTask = {()=>toggleShowAddTask()}/>

        <Routes>
          <Route 
            path = '/' 
            element ={
              <>
                {showAddTask && <AddTask onAddTask = {addTask} />}
                {tasks.length>0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>: 'No Tasks To Show'}
              </>
            }
          />
          <Route path = '/about' element = {<About/>} />
          <Route path = {`/task/:id`} element = {<TaskDetails/>}/>
        </Routes>
        <Footer/> 
      </div>
      </Router>
  );
}


export default App;
