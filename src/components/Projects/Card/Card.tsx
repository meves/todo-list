import React, { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../common/Button/Button";
import styles from './Card.module.scss'
import { Project } from "../../../store/libs/types";
import { useDispatch } from "react-redux";
import { setCurrentProjectId } from "../../../store/reducers/project-reducer";
import { setIsDeleteProjectModalOpen } from "../../../store/reducers/modal-reducer";

type ProjectCardProps = {
    project: Project
}

export const ProjectCard: FC<ProjectCardProps> = ({project}) => {
    const dispatch = useDispatch()

    const handleDeleteProjectOnClick = useCallback(() => {
        dispatch(setIsDeleteProjectModalOpen())
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