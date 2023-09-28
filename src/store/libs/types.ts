import { ModalState } from "../reducers/modal-reducer";
import store from "../redux-store";

export type RootState = ReturnType<typeof store.getState>

type PropertiesTypes<T> = T extends {[key: string] : infer U} ? U : never
export type InferActionsTypes<T extends {[key: string] : (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export type TaskPriorirty = 'low' | 'middle' | 'high'
export type TaskStatus = 'queue' | 'development' | 'done'

export type Task = {
    projectId: number,
    taskId: number,
    description: string
    createdDate: string
    endDate: string
    timeInProgress: number // in ms
    priority: TaskPriorirty
    files: File[]
    taskStatus: TaskStatus
    tasks?: Task[]
}

export type Project = {
    id: number
    projectName: string
    tasks?: Task[]
}

export type ModalOpen = keyof ModalState
