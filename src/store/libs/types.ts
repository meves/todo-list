import store from "../redux-store";

export type RootState = ReturnType<typeof store.getState>

type PropertiesTypes<T> = T extends {[key: string] : infer U} ? U : never
export type InferActionsTypes<T extends {[key: string] : (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export type Project = {
    id: number
    projectName: string
}