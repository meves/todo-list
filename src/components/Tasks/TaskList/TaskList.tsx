import React, { DragEvent, FC, useCallback } from "react";
import styles from './TaskList.module.scss'
import { useGetTasks } from "../../libs/hooks/useGetTasks";
import { Task, TaskStatus } from "../../../store/libs/types";
import { useDispatch } from "react-redux";
import { setCollapsed, setCurrentTask, setNewStatus } from "../../../store/reducers/project-reducer";
import { getDays, getHours, getMinutes } from "../../libs/utils/getTime";
import { Button } from "../../common/Button/Button";
import classNames from "classnames";
import { setModalOpen } from "../../../store/reducers/modal-reducer";

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

    const handleToggleCollapseOnClick = useCallback((task: Task) => {
        dispatch(setCollapsed(task, !task.collapsed))
    }, [dispatch])

    const handleDeleteTaskOnClcik = useCallback((task: Task) => {
        if (task.subtasks?.length) {
            dispatch(setModalOpen('not-delete-task'))
        } else {
            dispatch(setCurrentTask(task))
            dispatch(setModalOpen('delete-task'))
        }
    }, [dispatch])

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
                            className={classNames(styles.listItem, {'list-item-collapsed' : task.collapsed})}
                            draggable="true"
                            onDragStart={event => handleOnDragStart(event, task)}
                        >
                            <h2>Project: {task.projectName}</h2>
                            <h3>Title: {task.title}</h3>
                            <h3>Task: {task.description}</h3>
                            <p>Created: {task.createdDate}</p>
                            <p>End date: {task.endDate}</p>
                            <p>In progress:<br/>
                                {getDays(task.createdDate) ? <span>{getDays(task.createdDate)} days&nbsp;</span> : null}
                                {getHours(task.createdDate) ? <span>{getHours(task.createdDate)} hours&nbsp;</span> : null}
                                {getMinutes(task.createdDate) ? <span>{getMinutes(task.createdDate)} minutes&nbsp;</span> : null}
                            </p>
                            <p>Priority: {task.priority}</p>
                            <p>Status: {task.taskStatus}</p>
                            { task.files.length ?
                                <p style={{wordBreak: "break-all"}}>Files:<br/> {task.files}</p> : null
                            }                            
                            { task.subtasks?.length ? 
                                <p>Subtasks: {task.subtasks?.length}</p> : null
                            }
                            <div className={styles.buttons}>
                                <Button
                                    text="Add subtask"
                                    className={styles.button}
                                />
                                <Button
                                    text="Edit task"
                                    className={styles.button}
                                />
                                <Button
                                    text="Add comment"
                                    className={styles.button}
                                />
                                <Button
                                    text="Delete task"
                                    className={styles.button}
                                    onClick={() => handleDeleteTaskOnClcik(task)}
                                />
                            </div>
                            <Button
                                text={task.collapsed ? "expand" : "collapse"}
                                className={styles.roll}
                                onClick={() => handleToggleCollapseOnClick(task)}
                            />
                        </li>
                    )
                } else {
                    return null
                }
            })}
        </ul>
    )
}