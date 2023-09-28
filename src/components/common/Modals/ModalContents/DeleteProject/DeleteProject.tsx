import React, { useCallback } from "react";
import { Button } from "../../../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setModalClose } from "../../../../../store/reducers/modal-reducer";
import { deleteProject, selectCurrentProject, setCurrentProject } from "../../../../../store/reducers/project-reducer";
import modalStyles from '../ModalContents.module.scss'
import styles from './DeleteProject.module.scss'
import classNames from "classnames";

export const DeleteProjectModal = () => {
    const dispatch = useDispatch()
    const currentProject = useSelector(selectCurrentProject)

    const handleDeleteProjectOnClick = useCallback(() => {
        if (currentProject) {
            dispatch(deleteProject(currentProject.id))
            dispatch(setCurrentProject(null))
        }
        dispatch(setModalClose('delete-project'))
    }, [dispatch, currentProject])
    
    const handleCancelOnClick = useCallback(() => {
        dispatch(setModalClose('delete-project'))
    }, [dispatch])
    
    return (
        <div className={classNames(modalStyles.wrapper, styles.wrapper)}>
            <p
                className={styles.text}
            >Deleting a project cannot be undone. Continue?
            </p>
            
            <div className={modalStyles.buttons}>
                <Button
                    text="Delete project"
                    onClick={handleDeleteProjectOnClick}
                />
                <Button
                    text="Cancel"
                    onClick={handleCancelOnClick}
                />
            </div>
        </div>
    )
}