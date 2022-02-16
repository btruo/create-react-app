import {useState} from 'react'
// function component with states set using hooks.
const AddTask = ({onAdd}) => {
  const [text, setText] = useState ('')
  const [day, setDay] = useState ('')
  const [reminder, setReminder] = useState (false)

// when form is submitted, onSubmit is called. preventDefault stops from changing page. if entry is not text, alert user. then call onAdd which calls addTask. passes props text, day, reminder to AddTask. then refreshes entries to empty.
const onSubmit = (e) => {
	e.preventDefault()

	if(!text) {
		alert('task is empty')
		return
	}
	onAdd({text, day, reminder})

	setText('')
	setDay('')
	setReminder(false)
}

  return ( 
// onSubmit form, calls {onSubmit}
  <form className='add-form' onSubmit={onSubmit}>
	<div className='form-control'>
		<label> Task </label>
		<input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
	</div>

	<div className='form-control'>
		<label> Date & Time</label>
		<input type='text' placeholder= 'Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
	</div>

	<div className='form-control form-control-check'>
		<label>Set Reminder</label>
		<input 
		type='checkbox'
		checked={reminder}
		value={reminder} 
		onChange={(e) => setReminder(e.currentTarget.checked)}/>
	</div>

	<input type='submit' value='Save Task' className='btn btn-block'/>
  </form>
  )
};

export default AddTask;
