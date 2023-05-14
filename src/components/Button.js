
import PropTypes from 'prop-types'
const Button = ({color,text,onClick}) => {//can use props but we destructed props object for what we want passed in
    console.log(color,text)
    return (
    <button 
        onClick = {onClick}
        className = 'btn'
        style={{backgroundColor:color}}>
            {text}
    </button>
  )
}

Button.defaultProps = {
    backgroundColor : 'steelblue',
}

Button.propTypes = {
    color : PropTypes.string,
    text : PropTypes.string,
    onClick : PropTypes.func
}
export default Button   