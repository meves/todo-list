import { useEffect } from "react"
import { getFromLocalStorage } from "../utils/localStorage"
import { Project } from "../../../store/libs/types"
import { PROJECTS } from "../constants/localStorage-constants"
import { useDispatch } from "react-redux"
import { setProjects } from "../../../store/reducers/project-reducer"

export const useGetProjects = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const savedProjects: Project[] | null = getFromLocalStorage<Project[]>(PROJECTS)
        if (savedProjects) {
            const projects: Project[] = savedProjects.map(project => {
                return {
                    ...project,
                    tasks: project.tasks?.map(task => {
                        return {
                            ...task,
                            collapsed: true
                        }
                    })
                }
            })
            dispatch(setProjects(projects))
        }
    }, [dispatch])
}