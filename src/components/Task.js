import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Task = ({task,onDelete,onToggle}) => {
  return (
    <div className={task.reminder? 'task reminder':'task'} onDoubleClick = {()=>onToggle(task.id)}>
        <h3>
            {task.text} 
            <FaTimes onClick =  {()=>onDelete(task.id)} style = 
            {{color: 'red', 
            cursor: 'pointer'}}/>
        </h3>
        <p>{task.day}</p>
        <p><Link to={`/task/${task.id}`}>Task Details</Link></p>
    </div>
  )
}

export default Task