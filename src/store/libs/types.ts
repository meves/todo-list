import { ModalState } from "../reducers/modal-reducer";
import store from "../redux-store";

export type RootState = ReturnType<typeof store.getState>

type PropertiesTypes<T> = T extends {[key: string] : infer U} ? U : never
export type InferActionsTypes<T extends {[key: string] : (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export type TaskPriorirty = 'low' | 'middle' | 'high'
export type TaskStatus = 'queue' | 'development' | 'done'

export type Task = {
    projectId: number
    projectName: string
    parentTaskId: number| null
    taskId: number
    title: string
    description: string
    createdDate: string
    endDate: string
    priority: TaskPriorirty
    files: string[]
    taskStatus: TaskStatus
    subtasks?: Task[]
    collapsed: boolean
}

export type ProjectData = {
    id: number
    projectName: string
}

export type Project = {
    id: number
    projectName: string
    tasks?: Task[]
}

export type ModalOpen = keyof ModalState
