import React, { useCallback } from "react";
import styles from './DeleteProject.module.scss'
import { Button } from "../../../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setIsDeleteProjectModalClose } from "../../../../../store/reducers/modal-reducer";
import { deleteProject, selectCurrentProjectId, setCurrentProjectId } from "../../../../../store/reducers/project-reducer";

export const DeleteProjectModal = () => {
    const dispatch = useDispatch()
    const currentProjectId = useSelector(selectCurrentProjectId)

    const handleDeleteProjectOnClick = useCallback(() => {
        if (currentProjectId) {
            dispatch(deleteProject(currentProjectId))
            dispatch(setCurrentProjectId(null))
        }
        dispatch(setIsDeleteProjectModalClose())
    }, [dispatch, currentProjectId])
    
    const handleCancelOnClick = useCallback(() => {
        dispatch(setIsDeleteProjectModalClose())
    }, [dispatch])
    
    return (
        <div className={styles.wrapper}>
            <p
                className={styles.text}
            >Deleting a project cannot be undone. Continue?
            </p>
            
            <div className={styles.buttons}>
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