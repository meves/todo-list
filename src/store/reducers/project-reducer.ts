import { TaskStatus } from './../libs/types';
import { InferActionsTypes, RootState } from "../libs/types"
import { 
    SET_NEW_PROJECT, SET_PROJECTS, DELETE_PROJECT, SET_CURRENT_PROJECT,
    SET_NEW_TASK, SET_NEW_STATUS, SET_COLLAPSE, DELETE_TASK, SET_CURRENT_TASK    
} from "../libs/constants"
import type { Project, ProjectData, Task } from "../libs/types"
import { saveToLocalStorage } from "../../components/libs/utils/localStorage"
import { PROJECTS } from "../../components/libs/constants/localStorage-constants"

const initialState = {
    projects: [] as Project[],
    currentProject: null as ProjectData | null,
    currentTask: null as Task | null
}

export type ProjectState = typeof initialState

type Actions = InferActionsTypes<typeof actions>

const projectReducer = (state=initialState, action: Actions): ProjectState => {
    let newProjects: Project[]
    switch (action.type) {
        case SET_NEW_PROJECT:
            newProjects = [...state.projects, action.payload.project]
            saveToLocalStorage(PROJECTS, newProjects)
            return {
                ...state,
                projects: newProjects
            }
        case SET_PROJECTS:
            return {
                ...state,
                projects: action.payload.projects
            }
        case DELETE_PROJECT:
            newProjects = state.projects.filter(project => project.id !== action.payload.id)
            saveToLocalStorage(PROJECTS, newProjects)
            return {
                ...state,
                projects: newProjects
            }
        case SET_CURRENT_PROJECT:
            return {
                ...state,
                currentProject: action.payload.currentProject
            }
        case SET_NEW_TASK:
            newProjects = state.projects.map(project => {
                if (project.id === action.payload.task.projectId) {
                    return {
                        ...project,
                        tasks: project.tasks ? [...project.tasks, action.payload.task] : [action.payload.task]
                    }
                }
                return project
            })
            saveToLocalStorage(PROJECTS, newProjects)
            return {
                ...state,
                projects: newProjects
            }
        case SET_NEW_STATUS:
            newProjects = state.projects.map(project => {
                if (project.id === action.payload.task.projectId) {
                    return {
                        ...project,
                        tasks: project.tasks?.map(task => {
                            if (task.taskId === action.payload.task.taskId) {
                                task.taskStatus = action.payload.taskStatus
                            }
                            return task
                        })
                    }
                }
                return project
            })
            saveToLocalStorage(PROJECTS, newProjects)
            return {
                ...state,
                projects: newProjects
            }
        case SET_COLLAPSE:
            newProjects = state.projects.map(project => {
                if (project.id === action.payload.task.projectId) {
                    return {
                        ...project,
                        tasks: project.tasks?.map(task => {
                            if (task.taskId === action.payload.task.taskId) {
                                task.collapsed = action.payload.collapsed
                            }
                            return task
                        })
                    }
                }
                return project
            })
            saveToLocalStorage(PROJECTS, newProjects)
            return {
                ...state,
                projects: newProjects
            }
        case DELETE_TASK:
            newProjects = state.projects.map(project => {
                if (project.id === action.payload.task.projectId) {
                    return {
                        ...project,
                        tasks: project.tasks?.filter(task => task.taskId !== action.payload.task.taskId)
                    }
                }
                return project
            })
            saveToLocalStorage(PROJECTS, newProjects)
            return {
                ...state,
                projects: newProjects 
            }
        case SET_CURRENT_TASK:
            return {
                ...state,
                currentTask: action.payload.task
            }
        default:
            return state
    }
}

export default projectReducer

const actions = {
    setNewProject (project: Project) {
        return { type: SET_NEW_PROJECT, payload: { project } } as const
    },
    setProjects (projects: Project[]) {
        return { type: SET_PROJECTS, payload: { projects } } as const
    },
    deleteProject (id: number) {
        return {type: DELETE_PROJECT, payload: { id }} as const
    },
    setCurrentProject (currentProject: ProjectData | null) {
        return {type: SET_CURRENT_PROJECT, payload: { currentProject }} as const
    },
    setNewTask (task: Task) {
        return {type: SET_NEW_TASK, payload: { task }} as const
    },
    deleteTask (task: Task) {
        return {type: DELETE_TASK, payload: { task }} as const
    },
    setCurrentTask (task: Task | null) {
        return {type: SET_CURRENT_TASK, payload: { task }} as const
    },
    setNewStatus (task: Task, taskStatus: TaskStatus) {
        return {type: SET_NEW_STATUS, payload: { task, taskStatus }} as const
    },
    setCollapsed (task: Task, collapsed: boolean) {
        return {type: SET_COLLAPSE, payload: { task, collapsed }} as const
    }
}

export const { 
    setNewProject, 
    setProjects, 
    deleteProject,
    deleteTask,
    setCurrentProject ,
    setNewTask,
    setCurrentTask,
    setNewStatus,
    setCollapsed

} = actions

export const selectProjects = (state: RootState) => state.projectsPage.projects
export const selectCurrentProject = (state: RootState) => state.projectsPage.currentProject
export const selectCurrentTask = (state: RootState) => state.projectsPage.currentTask