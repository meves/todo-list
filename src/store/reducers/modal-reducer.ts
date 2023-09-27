import { SET_MODAL_CLOSE, SET_MODAL_OPEN } from "../libs/constants"
import { InferActionsTypes, RootState } from "../libs/types"

const initialState = {
    isModalOpen: false
}

export type ModalState = typeof initialState

type Actions = InferActionsTypes<typeof actions>

const modalReducer = (state=initialState, action: Actions): ModalState => {
    switch (action.type) {
        case 'todo-list/modals/SET-MODAL-OPEN':
            return {
                ...state,
                isModalOpen: action.payload.isOpen
            }
        case 'todo-list/modals/SET-MODAL-CLOSE':
            return {
                ...state,
                isModalOpen: action.payload.isOpen
            }
        default:
            return state
    }
}

export default modalReducer

const actions = {
    setIsModalOpen () {
        return {type: SET_MODAL_OPEN, payload: {isOpen: true}} as const
    },
    setIsModalClose () {
        return {type: SET_MODAL_CLOSE, payload: {isOpen: false}} as const
    }
}

export const { setIsModalOpen, setIsModalClose } = actions

export const selectIsModalOpen = (state: RootState) => state.modals.isModalOpen