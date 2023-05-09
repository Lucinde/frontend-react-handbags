import React from 'react';

function Button({buttonType, children, disabled}) {
    return (
        <>
        <button type={buttonType} disabled={disabled}>{children}</button>
        </>
    );
}

export default Button;