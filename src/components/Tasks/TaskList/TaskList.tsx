import React, { DragEvent, FC, useCallback } from "react";
import styles from './TaskList.module.scss'
import { useGetTasks } from "../../libs/hooks/useGetTasks";
import { Task, TaskStatus } from "../../../store/libs/types";
import { useDispatch } from "react-redux";
import { setNewStatus } from "../../../store/reducers/project-reducer";

type TaskListProps = {
    taskStatus: TaskStatus
}

let currentTask: Task

export const TaskList: FC<TaskListProps> = ({taskStatus}) => {
    const dispatch = useDispatch()
    const {tasks} = useGetTasks()

    const handleOnDragStart = useCallback((event: DragEvent<HTMLLIElement>, task: Task) => {
        currentTask = task
    }, [])

    const handleOnDragOver = useCallback((event: DragEvent<HTMLUListElement>) => {
        event.preventDefault()
    }, [])

    const handleListOnDrop = useCallback((event: DragEvent<HTMLUListElement>) => {
        event.preventDefault()
        dispatch(setNewStatus(currentTask, taskStatus))   
    }, [dispatch, taskStatus])

    return (
        <ul 
            className={styles.list} 
            draggable="true" 
            onDragOver={handleOnDragOver}
            onDrop={handleListOnDrop}
        >
            {tasks.map(task => {
                if (task.taskStatus === taskStatus) {
                    return (
                        <li 
                            key={task.taskId}
                            className={styles.listItem}
                            draggable="true"
                            onDragStart={event => handleOnDragStart(event, task)}
                        >
                            <h3>{task.description}</h3>
                            <p>{task.createdDate}</p>
                            <p>{task.endDate}</p>
                            <p>{task.timeInProgress}</p>
                            <p>{task.priority}</p>
                            <p>{task.taskStatus}</p>
                            <p>files: {task.files.length}</p>
                            <p>sutasks: {task.tasks?.length}</p>
                        </li>
                    )
                } else {
                    return null
                }
            })}
        </ul>
    )
}