// Proptypes are imported to ensure the props passed are of a specific type (string/number/boolean etc)
import PropTypes from 'prop-types'
// props passed from parent component MyHeader to child component Button are {color, text}. have to catch any props passed from MyHeader here.
// use rafce shortcut to make quick arrow function.
const Button = ({color, text, onClick}) => {


	return (
		<button 
		onClick={onClick} style={{backgroundColor: color}} className='btn'
		>
			{text}
		</button>
 )
};
// defaultProps sets a default styling if no parameter set manually.
Button.defaultProps = {
	color: 'steelblue',
}
// denotes type of prop passed.
Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
}
// exports the Button component
export default Button;
