import PropTypes from 'prop-types';
import classes from './Modal.module.scss'

const Backdrop = () => {
    return (
        <div
        className={classes.backdrop}
        >

        </div>
    )
}

const Filter = ({children, onClick}) => {
    return (
        <div
        className={classes.filter}
        onClick={onClick}
        >
            <p>{children}</p>
        </div>
    )
}


const Modal = ({className}) => {
    return(
        <>
        <Backdrop/>
            <div
            className={className}
            >
                <Filter>kcal: to higher</Filter>
                <Filter>kcal: to higher</Filter>
                <Filter>kcal: to higher</Filter>
                <Filter>kcal: to higher</Filter>
            </div>
        </>
    )
}

Modal.propTypes = {
    className: PropTypes.string.isRequired,
}

Modal.defaultProps = {
    className: `${classes.modal}`,
}

Filter.propTypes = {
    
}

export default Modal;