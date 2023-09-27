import React, { useEffect } from "react";
import { ProjectCard } from "../Card/Card";
import styles from './Cards.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { selectProjects, setProjects } from "../../../store/reducers/project-reducer";
import { getFromLocalStorage } from "../../libs/utils/localStorage";
import { PROJECTS } from "../../libs/constants/localStorage-constants";
import { Project } from "../../../store/libs/types";

export const ProjectCards = () => {
    const dispatch = useDispatch()
    const projects: Project[] = useSelector(selectProjects)
    
    useEffect(() => {
        const savedProjects = getFromLocalStorage<Project[]>(PROJECTS)
        if (savedProjects) {
            dispatch(setProjects(savedProjects))
        }
    }, [dispatch])
    
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