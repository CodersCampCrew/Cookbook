import React from 'react';
import classes from './Button.module.scss'

const Button =({type, onClick,} ) => {
    return (
        <button
            className={classes.button}
            type={type || 'button'}
            onClick={onClick}
        >   
            
        </button>

    )
} 

export default Button;