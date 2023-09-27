import React, { FC } from "react";
import styles from './Button.module.scss'
import classNames from "classnames";

type ButtonProps = {
    text: string
    className?: string
    onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
    text, 
    className,
    onClick
}) => {
    return (
        <button     
            className={classNames(styles.button, className)}
            onClick={onClick}    
        >{text}
        </button>
    )
}