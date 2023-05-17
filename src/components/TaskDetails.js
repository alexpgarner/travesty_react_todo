import {useState,useEffect} from 'react'
import {useParams, /*Navigate,*/ useNavigate, useLocation} from 'react-router-dom'
import Button from './Button.js'

const TaskDetails = () => {
	const [task,setTask]= useState({})
	const [loading,setLoading] = useState(true)
	const params = useParams();
	const navigate = useNavigate();
	const {pathname} = useLocation();
	useEffect(()=>{
		const fetchTasks = async ()=> {
			const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
			const data = await res.json();
			if(res.status === 404){
				navigate('/');
			}
			setTask(data)
			setLoading(false)
		}

		fetchTasks();
	})
	
	return loading ? 'Loading': (
    <div>
			<p>{pathname}</p>
			<p>{task.text}</p>
			<p>{task.day}</p>
			<Button 
				text= 'Go Back' 
				onClick = {()=>{
					navigate(-1)
			}}/>
		</div>
  )
}

export default TaskDetails