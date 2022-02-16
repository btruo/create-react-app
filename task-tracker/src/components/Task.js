import {FaTimes} from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
	return ( 
// in class name we check if task.reminder is true. if it is, set className to task.reminder. if not, className is task.
	<div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}>
		<h3>{task.text} 
		<FaTimes style={{color: 'red', cursor: 'pointer'}} 
// when calling onClick={}, call a function onDelete that deletes task.id. this gives access to the state and id.
		onClick={()=> onDelete(task.id)}/>
		</h3>
		<p>{task.day}</p>
		
	</div>
	);
};

export default Task;
