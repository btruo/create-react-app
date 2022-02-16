import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
// here we use a hook to place our tasks within the component instead of outside of it. the tasks are in [tasks, setTasks], where setTasks is a method to set what the tasks are

	return (
		<>
			{tasks.map((task) => (
				<Task key={task.id} task={task} onDelete ={onDelete} onToggle={onToggle}/>
			))}
		</>);



};export default Tasks;
