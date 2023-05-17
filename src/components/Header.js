import PropTypes from 'prop-types'
import Button from './Button.js'
import {useLocation} from 'react-router-dom'
const Header = (props) => {//destructure props for less confusions. I kept it this way for an example.
  // can 
  // const onClick = (e)=>{
  //   console.log(e,'click');
  //   props.onShowAddTask(props.showAddTask)
  // }
  //console.log(props)
  const location = useLocation();
  return (
    <header className = 'header'>
      <h1>{props.title}</h1>
      {/* <Button onClick = {props.onShowAddTask} color = {props.color} text ={props.title}/> MY WAY WORKED. I like travesty way better less props to pass and get confused about*/}
      {location.pathname === '/' && <Button 
        onClick = {props.onShowAddTask} 
        color = {props.showAddTask ? 'red' : 'green'} 
        text ={!props.showAddTask ? 'ADD TASK' : 'CLOSE'}/>}
    </header>
  )
}

Header.defaultProps = {
  title: "Traversty Tracker"
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  //color: PropTypes.string.isRequired
}

// const headStyles = {
//   color: 'red',
//   backgroundColor : 'black'
// } you can style stuff with variables inside jsx tags with style ={headStyles}
export default Header