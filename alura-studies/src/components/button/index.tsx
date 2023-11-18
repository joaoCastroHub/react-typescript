import React from 'react';
import style from './button.module.scss';

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function Button({ onClick, type, children }: ButtonProps) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}

export default Button;