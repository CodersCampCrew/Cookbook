import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.scss'

const Button =({className, type, onClick, text} ) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >   
            {text}
        </button>

    )
} 

Button.propTypes = {
    className: PropTypes.string.isRequired,
    type: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired 
}

Button.defaultProps = {
    className: `${classes.button}`,
    type: 'button',
    text: 'Click me!'
}



export default Button;