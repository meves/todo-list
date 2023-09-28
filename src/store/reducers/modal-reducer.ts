import { 
    SET_MODAL_OPEN, 
    SET_MODAL_CLOSE,
} from "../libs/constants"
import { InferActionsTypes, ModalOpen, RootState } from "../libs/types"

const initialState = {
    'create-project': false,
    'delete-project': false,
    'create-task': false
}

export type ModalState = typeof initialState

type Actions = InferActionsTypes<typeof actions>

const modalReducer = (state=initialState, action: Actions): ModalState => {
    switch (action.type) {
        case SET_MODAL_OPEN:
            return {
                ...state,
                [action.payload.modalType]: true
            }
        case SET_MODAL_CLOSE:
            return {
                ...state,
                [action.payload.modalType]: false
            }
        default:
            return state
    }
}

export default modalReducer

const actions = {
    setModalOpen (modalType: ModalOpen) {
        return {type: SET_MODAL_OPEN, payload: { modalType }} as const
    },
    setModalClose (modalType: ModalOpen) {
        return {type: SET_MODAL_CLOSE, payload: { modalType }} as const
    }
}

export const { 
    setModalOpen,
    setModalClose

} = actions

export const selectModalOpen = (state: RootState) => state.modals