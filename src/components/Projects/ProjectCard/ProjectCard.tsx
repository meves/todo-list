import React, { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../common/Button/Button";
import styles from './ProjectCard.module.scss'
import { Project } from "../../../store/libs/types";
import { useDispatch } from "react-redux";
import { setCurrentProjectId } from "../../../store/reducers/project-reducer";
import { setModalOpen } from "../../../store/reducers/modal-reducer";

type ProjectCardProps = {
    project: Project
}

export const ProjectCard: FC<ProjectCardProps> = ({project}) => {
    const dispatch = useDispatch()

    const handleDeleteProjectOnClick = useCallback(() => {
        dispatch(setModalOpen('delete-project'))
        dispatch(setCurrentProjectId(project.id))
    }, [dispatch, project.id])

    const handleCreateTaskOnClick = useCallback(() => {
        dispatch(setModalOpen('create-task'))
        dispatch(setCurrentProjectId(project.id))
    }, [dispatch, project.id])

    return (
        <section className={styles.card}>
            <h2 className={styles.title}>{project.projectName}</h2>
            <Link 
                to="/tasks"
                className={styles.link}    
            >Go to tasks</Link>
            <div className={styles.buttons}>
                <Button 
                    className={styles.button} 
                    text="Create new task"
                    onClick={handleCreateTaskOnClick}
                />
                <Button 
                    className={styles.button} 
                    text="Delete project"
                    onClick={handleDeleteProjectOnClick}
                />
            </div>
        </section>
    )
}