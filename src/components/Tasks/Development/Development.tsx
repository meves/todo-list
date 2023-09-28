import React from "react";
import taskStyles from './../Tasks.module.scss'
import styles from './Development.module.scss'
import classNames from "classnames";
import { TaskList } from "../TaskList/TaskList";

export const Development = () => {
    
    return (
        <section className={classNames(taskStyles.taskColumn, styles.wrapper)}>
            <h2 className={classNames(taskStyles.title)}>Development</h2>
            <TaskList
                taskStatus="development"
            />
        </section>
    )
}