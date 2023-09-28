import React, { ChangeEvent, useCallback, useState } from "react";
import modalStyles from '../ModalContents.module.scss'
import styles from './CreateTask.module.scss'
import classNames from "classnames";
import { Button } from "../../../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setModalClose } from "../../../../../store/reducers/modal-reducer";
import { selectCurrentProjectId, setNewTask } from "../../../../../store/reducers/project-reducer";
import { TaskPriorirty, TaskStatus } from "../../../../../store/libs/types";
import { useNavigate } from "react-router-dom";

export const CreateTaskModal = () => {
    const dispatch = useDispatch()
    const currentProjectId = useSelector(selectCurrentProjectId) as number
    const navigate = useNavigate()

    const [taskName, setTaskName] = useState('')
    const handleTaskNameOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        setTaskName(value)
    }, [])

    const handleCreateTaskOnClick = useCallback(() => {
        const newTask = {
            projectId: currentProjectId,
            taskId: Date.now(),
            description: taskName,
            createdDate: new Date().toDateString(),
            endDate: new Date().toDateString(),
            timeInProgress: 123,
            priority: 'middle' as TaskPriorirty, //
            files: [], //
            taskStatus: 'queue' as TaskStatus
        }
        dispatch(setNewTask(newTask))
        dispatch(setModalClose('create-task'))
        navigate('/tasks')
    }, [dispatch, navigate, currentProjectId, taskName])

    const handleCancelOnClick = useCallback(() => {
        dispatch(setModalClose('create-task'))
    }, [dispatch])

    return (
        <div className={classNames(modalStyles.wrapper, styles.wrapper)}>
            <form>
                <input 
                    type="text"
                    name="task-name"
                    value={taskName}
                    onChange={handleTaskNameOnChange}
                />
                <div className={modalStyles.buttons}>
                    <Button
                        text="Create task"
                        onClick={handleCreateTaskOnClick}
                    />
                    <Button
                        text="Cancel"
                        onClick={handleCancelOnClick}
                    />
                </div>
            </form>
        </div>
    )
}