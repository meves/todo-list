import { InferActionsTypes, RootState } from "../libs/types"
import { SET_NEW_PROJECT, SET_PROJECTS } from "../libs/constants"
import type { Project } from "../libs/types"

const initialState = {
    projects: [] as Project[]
}

export type ProjectState = typeof initialState

type Actions = InferActionsTypes<typeof actions>

const projectReducer = (state=initialState, action: Actions): ProjectState => {
    switch (action.type) {
        case SET_NEW_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        case SET_PROJECTS:
            return {
                ...state,
                projects: action.payload.projects
            }
        default:
            return state
    }
}

export default projectReducer

const actions = {
    setNewProject (project: Project) {
        return { type: SET_NEW_PROJECT, payload: project } as const
    },
    setProjects (projects: Project[]) {
        return { type: SET_PROJECTS, payload: { projects } } as const
    }
}

export const { setNewProject, setProjects } = actions

export const selectProjects = (state: RootState) => state.projectsPage.projects