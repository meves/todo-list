import React, { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../common/Button/Button";
import styles from './ProjectCard.module.scss'
import { Project } from "../../../store/libs/types";
import { useDispatch } from "react-redux";
import { setCurrentProject } from "../../../store/reducers/project-reducer";
import { setModalOpen } from "../../../store/reducers/modal-reducer";

type ProjectCardProps = {
    project: Project
}

export const ProjectCard: FC<ProjectCardProps> = ({project}) => {
    const dispatch = useDispatch()

    const handleDeleteProjectOnClick = useCallback(() => {
        const tasksDone = project.tasks?.every(task => task.taskStatus === 'done')
        if (!project.tasks || tasksDone) {
            dispatch(setModalOpen('delete-project'))
            dispatch(setCurrentProject({id: project.id, projectName: project.projectName}))
        } else {
            dispatch(setModalOpen("not-delete-project"))
        }
    }, [dispatch, project])

    const handleCreateTaskOnClick = useCallback(() => {
        dispatch(setModalOpen('create-task'))
        dispatch(setCurrentProject({id: project.id, projectName: project.projectName}))
    }, [dispatch, project])

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