import React from 'react';

function Button({buttonType, children, disabled, clickHandler}) {
    return (
        <>
        <button type={buttonType} disabled={disabled} onClick={clickHandler}>{children}</button>
        </>
    );
}

export default Button;