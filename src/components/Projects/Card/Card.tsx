import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../common/Button/Button";
import styles from './Card.module.scss'

type ProjectCardProps = {
    projectName: string
}

export const ProjectCard: FC<ProjectCardProps> = ({projectName}) => {
    return (
        <section className={styles.card}>
            <h2 className={styles.title}>{projectName}</h2>
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
                />
            </div>
        </section>
    )
}