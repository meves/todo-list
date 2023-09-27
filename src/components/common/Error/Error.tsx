import React, { FC } from "react";
import styles from './Error.module.scss'

type ErrorProps = {
    errorText: string
}

export const Error: FC<ErrorProps> = ({errorText}) => {
    return (
        <div className={styles.error}>
            {errorText}
        </div>
    )
}