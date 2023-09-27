import React from "react";
import taskStyles from './../Tasks.module.scss'
import styles from './Done.module.scss'
import classNames from "classnames";

export const Done = () => {
    return (
        <section className={classNames(taskStyles.taskColumn, styles.wrapper)}>
            <h2 className={classNames(taskStyles.title)}>Done</h2>
        </section>
    )
}