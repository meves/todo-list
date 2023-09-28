import React, { FC } from "react";
import styles from './Button.module.scss'
import classNames from "classnames";

type ButtonProps = {
    text: string
    className?: string
    onClick?: () => void
    type?: "button" | "submit" | "reset"
}

export const Button: FC<ButtonProps> = ({
    text, 
    className,
    onClick,
    type 
}) => {
    return (
        <button     
            className={classNames(styles.button, className)}
            onClick={onClick}
            type={type}
        >{text}
        </button>
    )
}