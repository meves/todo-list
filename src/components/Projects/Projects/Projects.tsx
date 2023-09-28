import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import styles from './Projects.module.scss'
import { useSelector } from "react-redux";
import { selectProjects } from "../../../store/reducers/project-reducer";
import { Project } from "../../../store/libs/types";

export const Projects = () => {
    const projects: Project[] = useSelector(selectProjects)
    
    return (
        <ul className={styles.list}>
            {projects.map(project => (
                <li key={project.id}>
                    <ProjectCard
                        project={project}
                    />
                </li>
            ))}
        </ul>
    )
}