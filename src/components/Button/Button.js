import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.scss'

const Button =({type, onClick, text} ) => {
    return (
        <button
            className={classes.button}
            type={type}
            onClick={onClick}
        >   
            {text}
        </button>

    )
} 

Button.propTypes = {
    type: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired 
}

Button.defaultProps = {
    type: 'button',
    text: 'Click me!'
}



export default Button;