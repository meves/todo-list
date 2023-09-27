import React from "react";
import taskStyles from './../Tasks.module.scss'
import styles from './Queue.module.scss'
import classNames from "classnames";

export const Queue = () => {
    return (
        <section className={classNames(taskStyles.taskColumn, styles.wrapper)}>
            <h2 className={classNames(taskStyles.title)}>Queue</h2>
        </section>
    )
}