import PropTypes from 'prop-types'
import Button from './Button'
// component MyHeader received props title, onAdd, showAdd
const MyHeader = ({ title, onAdd, showAdd }) => {

	return (
		<header className='header'>
			<h1> {title}</h1>
{/* Button colow and text conditionals */}
			<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
		</header>
	)
};

MyHeader.defaultProps = {
	title: 'Task Tracker',
}

MyHeader.propTypes = {
	title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
// 	color: 'blue', 
// 	backgroundColor: 'black'
// }

export default MyHeader;
