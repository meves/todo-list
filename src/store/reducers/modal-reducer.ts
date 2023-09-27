import { 
    SET_CREATE_NEW_PROJECT_MODAL_CLOSE, 
    SET_CREATE_NEW_PROJECT_MODAL_OPEN, 
    SET_DELETE_PROJECT_MODAL_CLOSE, 
    SET_DELETE_PROJECT_MODAL_OPEN
} from "../libs/constants"
import { InferActionsTypes, RootState } from "../libs/types"

const initialState = {
    isCreateNewProjectModalOpen: false,
    isDeleteProjectModalOpen: false
}

export type ModalState = typeof initialState

type Actions = InferActionsTypes<typeof actions>

const modalReducer = (state=initialState, action: Actions): ModalState => {
    switch (action.type) {
        case SET_CREATE_NEW_PROJECT_MODAL_OPEN:
            return {
                ...state,
                isCreateNewProjectModalOpen: action.payload.isOpen
            }
        case SET_CREATE_NEW_PROJECT_MODAL_CLOSE:
            return {
                ...state,
                isCreateNewProjectModalOpen: action.payload.isOpen
            }
        case SET_DELETE_PROJECT_MODAL_OPEN:
            return {
                ...state,
                isDeleteProjectModalOpen: action.payload.isOpen
            }
        case SET_DELETE_PROJECT_MODAL_CLOSE:
            return {
                ...state,
                isDeleteProjectModalOpen: action.payload.isOpen
            }
        default:
            return state
    }
}

export default modalReducer

const actions = {
    setIsCreateNewProjectModalOpen () {
        return {type: SET_CREATE_NEW_PROJECT_MODAL_OPEN, payload: {isOpen: true}} as const
    },
    setIsCreateNewProjectModalClose () {
        return {type: SET_CREATE_NEW_PROJECT_MODAL_CLOSE, payload: {isOpen: false}} as const
    },
    setIsDeleteProjectModalOpen () {
        return {type: SET_DELETE_PROJECT_MODAL_OPEN, payload: {isOpen: true}} as const
    },
    setIsDeleteProjectModalClose () {
        return {type: SET_DELETE_PROJECT_MODAL_CLOSE, payload: {isOpen: false}} as const
    }
}

export const { 
    setIsCreateNewProjectModalOpen, 
    setIsCreateNewProjectModalClose,
    setIsDeleteProjectModalOpen,
    setIsDeleteProjectModalClose,

} = actions

export const selectIsCreateNewProjectModalOpen = (state: RootState) => state.modals.isCreateNewProjectModalOpen
export const selectIsDeleteProjectModalOpen = (state: RootState) => state.modals.isDeleteProjectModalOpen