import React from 'react';
import safeDefaults from '../../../utilities/safeDefaults';
import './Button.css';

/**
 * Handles Enter key press on Button
 * @param {object} e -  click event object
 * @param {function} callback - click callback
 */
const handleClick = (e, callback) =>{
    if (callback) {
        e.preventDefault();
        callback(e);
    }
};

/**
 * Gives markup for button tag
 * @param {Object} props - Props passed to this module
 * @returns {JSX.Element} - Returns React markup to generate anchor tag
 */
const Button = (props) => {
    const { buttonClassName, buttonTitle, buttonLabel, ariaLabel, id, isDisabled } = props;
    const className = safeDefaults(buttonClassName, null);
    const title = safeDefaults(buttonTitle, null);

    return (
        <button
            id={ id }
            className={`button ${className}`}
            title={ title }
            aria-label={ ariaLabel }
            disabled={ isDisabled ? 'disabled' : ''}
            onClick={(e) => {
                handleClick(e, props.onClick);
            }}
        >
            { buttonLabel }
        </button>
    );
};

export default Button;
