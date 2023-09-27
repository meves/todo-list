import React from "react";
import { ProjectCard } from "../Card/Card";
import styles from './Cards.module.scss'
import { useSelector } from "react-redux";
import { selectProjects } from "../../../store/reducers/project-reducer";
import { Project } from "../../../store/libs/types";

export const ProjectCards = () => {
    const projects: Project[] = useSelector(selectProjects)
    
    return (
        <ul className={styles.list}>
            {projects.map(project => (
                <li key={project.id}>
                    <ProjectCard
                        projectName={project.projectName}
                    />
                </li>
            ))}
        </ul>
    )
}