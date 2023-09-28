import React, { useCallback } from "react";
import modalStyles from '../ModalContents.module.scss'
import styles from './NotDeleteProject.module.scss'
import classNames from "classnames";
import { Button } from "../../../Button/Button";
import { useDispatch } from "react-redux";
import { setModalClose } from "../../../../../store/reducers/modal-reducer";

export const NotDeleteProjectModal = () => {
    const dispatch = useDispatch()

    const handleCloseModalOnClick = useCallback(() => {
        dispatch(setModalClose("not-delete-project"))
    }, [dispatch])

    return (
        <div className={classNames(modalStyles.wrapper, styles.wrapper)}>
            <p className={styles.text}>
            You cannot delete a project that has unfinished tasks
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