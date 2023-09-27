import { InferActionsTypes, RootState } from "../libs/types"
import { DELETE_PROJECT, SET_CURRENT_PROJECT_ID, SET_NEW_PROJECT, SET_PROJECTS } from "../libs/constants"
import type { Project } from "../libs/types"
import { saveToLocalStorage } from "../../components/libs/utils/localStorage"
import { PROJECTS } from "../../components/libs/constants/localStorage-constants"

const initialState = {
    projects: [] as Project[],
    currentProjectId: null as number | null
}

export type ProjectState = typeof initialState

type Actions = InferActionsTypes<typeof actions>

const projectReducer = (state=initialState, action: Actions): ProjectState => {
    switch (action.type) {
        case SET_NEW_PROJECT:
            const newProjects = [...state.projects, action.payload.project]
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
            const projects = state.projects.filter(project => project.id !== action.payload.id)
            saveToLocalStorage(PROJECTS, projects)
            return {
                ...state,
                projects
            }
        case SET_CURRENT_PROJECT_ID:
            return {
                ...state,
                currentProjectId: action.payload.id
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
    setCurrentProjectId (id: number | null) {
        return {type: SET_CURRENT_PROJECT_ID, payload: { id }} as const
    }
}

export const { setNewProject, setProjects, deleteProject, setCurrentProjectId } = actions

export const selectProjects = (state: RootState) => state.projectsPage.projects
export const selectCurrentProjectId = (state: RootState) => state.projectsPage.currentProjectId