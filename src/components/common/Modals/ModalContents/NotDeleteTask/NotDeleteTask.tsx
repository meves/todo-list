import React, { useCallback } from "react";
import modalStyles from '../ModalContents.module.scss'
import styles from './NotDeleteTask.module.scss'
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { Button } from "../../../Button/Button";
import { setModalClose } from "../../../../../store/reducers/modal-reducer";

export const NotDeleteTaskModal = () => {
    const dispatch = useDispatch()

    const handleCloseModalOnClick = useCallback(() => {
        dispatch(setModalClose("not-delete-task"))
    }, [dispatch])

    return (
        <div className={classNames(modalStyles.wrapper, styles.wrapper)}>
            <p className={styles.text}>
            You cannot delete a task that is not finished or has unfinished subtasks.
            </p>
            <div className={styles.buttons}>
                <Button
                    text="Close"
                    onClick={handleCloseModalOnClick}
                />
            </div>
        </div>
    )
}