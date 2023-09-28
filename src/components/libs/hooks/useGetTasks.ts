import { useSelector } from "react-redux"
import { selectProjects } from "../../../store/reducers/project-reducer"
import { useEffect, useState } from "react"
import { Task } from "../../../store/libs/types"

export const useGetTasks = () => {
    const projects = useSelector(selectProjects)

    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        projects.forEach(project => {
            if (project.tasks) {
                project.tasks.forEach(task => setTasks(tasks => [...tasks, task]))
            }
        })
        return () => {
            setTasks([])
        }
    }, [projects])

    return { tasks, setTasks }
}