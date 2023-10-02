import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import modalStyles from '../ModalContents.module.scss'
import styles from './CreateTask.module.scss'
import classNames from "classnames";
import { Button } from "../../../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setModalClose } from "../../../../../store/reducers/modal-reducer";
import { selectCurrentProject, selectCurrentTask, setCurrentProject, setCurrentTask, setNewTask } from "../../../../../store/reducers/project-reducer";
import { ProjectData, Task, TaskPriorirty, TaskStatus } from "../../../../../store/libs/types";
import { useNavigate } from "react-router-dom";

export const CreateTaskModal = () => {
    const dispatch = useDispatch()
    const currentProject = useSelector(selectCurrentProject) as ProjectData
    const currentTask = useSelector(selectCurrentTask)

    const navigate = useNavigate()

    const [inputValue, setInputValue] = useState({title: '', description: '', endDate: '', files: []})
    
    const handleTaskNameOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name
        setInputValue(prev => ({...prev, [name]: value}))
    }, [])

    const handleCreateTaskOnClick = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newTask: Task = {
            projectId: currentProject.id,
            projectName: currentProject.projectName,
            parentTaskId: currentTask?.taskId ? currentTask.taskId : null,
            taskId: Date.now(),
            title: inputValue.title,
            description: inputValue.description,
            createdDate: new Date().toDateString(),
            endDate: inputValue.endDate,
            priority: 'middle' as TaskPriorirty,
            taskStatus: 'queue' as TaskStatus,
            files: inputValue.files,
            collapsed: true
        }
        dispatch(setNewTask(newTask))
        dispatch(setModalClose('create-task'))
        navigate('/tasks')
    }, [dispatch, navigate, currentProject, currentTask, inputValue])

    const handleCancelOnClick = useCallback(() => {
        dispatch(setModalClose('create-task'))
    }, [dispatch])

    useEffect(() => {
        return () => {
            dispatch(setCurrentProject(null))
            dispatch(setCurrentTask(null))
        }
    }, [dispatch])

    return (
        <div className={classNames(modalStyles.wrapper, styles.wrapper)}>
            <form 
                onSubmit={handleCreateTaskOnClick}
                className={styles.form}
            >
                <fieldset className={styles.fieldset}>
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="title">Title</label>
                        <input 
                            className={styles.input}
                            name="title"
                            value={inputValue.title}
                            onChange={handleTaskNameOnChange}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="description">Description</label>
                        <input 
                            className={styles.input}
                            name="description"
                            value={inputValue.description}
                            onChange={handleTaskNameOnChange}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="endDate">End date</label>
                        <input 
                            type="date" 
                            name="endDate"
                            className={styles.input}
                            value={inputValue.endDate}
                            onChange={handleTaskNameOnChange}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input 
                            type="file" 
                            name="files"
                            className={styles.input}
                            value={inputValue.files}
                            onChange={handleTaskNameOnChange}
                        />
                    </div>
                </fieldset>
                <div className={modalStyles.buttons}>
                    <Button
                        text="Create task"
                    />
                    <Button
                        text="Cancel"
                        onClick={handleCancelOnClick}
                        type="submit"
                    />
                </div>
            </form>
        </div>
    )
}