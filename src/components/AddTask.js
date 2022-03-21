import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    //Component level state management...
    //setText is the method that will rendered the entire component within the dom...
    const [text, setText] = useState('')
    const[day, setDay] = useState('')
    const[reminder, setReminder] = useState(false)

    //check some validation before calling the addTaskMethod i.e onAdd is the props
    const onSubmit = (event) => {
        event.preventDefault() //prevents normal form submission
        if(!text){
            alert('Please add a task')
            return
        }
        //call the onAdd Method and passed the values as objects (task)...
        onAdd({text, day, reminder})

        //and set the values back to empty once its been sent i.e re-rendered the entire component
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add day and time' value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                {/*e.currentTarget.checked returns a boolen value i.e true or false 0 or 1 */}
                <input type='checkbox' value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
