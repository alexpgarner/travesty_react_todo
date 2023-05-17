import {useState} from 'react'
const AddTask = ({onAddTask}) => {
    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    const [reminder,setReminder] = useState(false);
    const onClick = (e)=>{
        e.preventDefault();
        // tasks.push({//travesty did not pass task in as a prop instead did all sate related changes in App.addTask(). Does it matter?
        //     "id": Math.random * 10000,//make this random
        //     "text": text,
        //     "day": day,
        //     "reminder": reminder,
        //     })

        if(!text){//'' is falsy
            alert('Please add a task');
            return;
        }
        const newTask = {
            "text": text,
            "day": day,
            "reminder": reminder,
            }
        console.log('CLEEK',newTask)
        onAddTask(newTask)
        setText('')
        setDay('')
        setReminder(false)
        
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