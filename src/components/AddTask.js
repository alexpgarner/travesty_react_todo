import {useState} from 'react'
const AddTask = ({onAddTask,tasks}) => {
    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    const [reminder,setReminder] = useState(false);
    const onClick = (e)=>{
        e.preventDefault();
        tasks.push({//travesty did not pass task in as a prop instead did all sate related changes in App.addTask(). Does it matter?
            "id": tasks.length+1,//make this random
            "text": text,
            "day": day,
            "reminder": reminder,
            })
        if(!text){
            alert('Please add a task');
            return;
        }
        onAddTask(tasks)
        setText('')
        setDay('')
        setReminder(false)
            //console.log('CLEEK',tasks)
    }
    return (
    <form className = 'add-form' onSubmit = {(e)=>e.preventDefault}> 
        <div className = 'form-control'>
            <label>Task</label>
            <input 
                type = 'text' 
                placeholder = 'Add Task' 
                value = {text} 
                onChange = {(e)=>setText(e.target.value)}
            />
        </div>
        <div className = 'form-control'>
            <label>Day/Time</label>
            <input 
                type="text" 
                placeholder = 'Add Day/Time'
                value = {day} 
                onChange = {(e)=>setDay(e.target.value)} 
            />
        </div>
        <div className = 'form-control form-control-check'>
            <label>Reminder</label>
            <input 
                type="checkbox" 
                checked = {reminder}
                value = {reminder} 
                onChange = {(e)=>setReminder(e.currentTarget.checked)}
            />
        </div>
        <input 
            type = "submit" 
            value = 'Save Task' 
            className = 'btn btn-block' 
            onClick={(e)=>onClick(e)}
          />
    </form>
  )
}

export default AddTask