import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//instead of using the props.value convention ..its better to destructure the params passed down..
const Header = ({title, onClickAdd, showAdd}) => {

    return (
        <header className='header'>
            <h1>{title} </h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add New Task'} onClickAdd={onClickAdd} />
        </header>
    )
}

//we can set defaultProps in form of objects incase we are not passing the value from the caller component ...
Header.defaultProps = {
    title: 'Tasks Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


// const headingJsStyle = {
//     color: 'red', // and more css can be added as well..this is how to pass css in another way 
// }
export default Header


/**
 * in this case the header component doesn't need the props passed directly but because the button component needs it 
 * we first need to pass to the header component and then passed down to button component so that the button component can use it..
 * 
 */