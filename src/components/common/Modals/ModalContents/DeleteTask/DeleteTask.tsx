import React, { useCallback } from "react";
import modalStyles from '../ModalContents.module.scss'
import styles from './DeleteTask.module.scss'
import classNames from "classnames";
import { Button } from "../../../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setModalClose } from "../../../../../store/reducers/modal-reducer";
import { deleteTask, selectCurrentTask, setCurrentTask } from "../../../../../store/reducers/project-reducer";

export const DeleteTaskModal = () => {
    const dispatch = useDispatch()
    const currentTask = useSelector(selectCurrentTask)

    const handleDeleteTaskOnClick = useCallback(() => {
        if (currentTask && !currentTask.subtasks) {
            dispatch(deleteTask(currentTask))
        }
        dispatch(setCurrentTask(null))
        dispatch(setModalClose('delete-task'))
    }, [dispatch, currentTask])

    const handleCancelOnClick = useCallback(() => {
        dispatch(setModalClose('delete-task'))
    }, [dispatch])

    return (
        <div className={classNames(modalStyles.wrapper, styles.wrapper)}>
            <p
                className={styles.text}
            >Deleting a task cannot be undone. Continue?
            </p>
            
            <div className={modalStyles.buttons}>
                <Button
                    text="Delete task"
                    onClick={handleDeleteTaskOnClick}
                />
                <Button
                    text="Cancel"
                    onClick={handleCancelOnClick}
                />
            </div>
        </div>
    )
}