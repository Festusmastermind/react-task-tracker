import React from "react";
import PropTypes from 'prop-types'

//destructuring the props passed down..
const Button = ({ color, text, onClickAdd}) => {
    //const {color, text} = props;
    
    return (
        <button style={{ backgroundColor: color }} className="btn" onClick={onClickAdd} >
            {text}
        </button>
    );
};

//We can as well set defaultprops ...

Button.defaultProps = {
   text: 'Add Task', 
};

//PropTypes is used for checking the data type of props been passed down....
Button.propTypes = {
    color: PropTypes.string, 
    text: PropTypes.string,
    // clickMe: PropTypes.func, if we have to function as a props..
}

export default Button;
