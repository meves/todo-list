import React, { FC, ReactNode } from "react"
import { useModal } from "../../libs/hooks/useModal"
import { createPortal } from "react-dom"
import styles from './Modal.module.scss'
import { selectIsModalOpen } from "../../../store/reducers/modal-reducer"
import { useSelector } from "react-redux"

type ModalProps = {
    children: ReactNode
}

export const Modal: FC<ModalProps> = ({children}) => {
    const isModalOpen = useSelector(selectIsModalOpen)

    const {domElement} = useModal(isModalOpen)
    
    return (
        createPortal(
            <div className={styles.modal}>
                {children}
            </div>,
            domElement
        )
    )
}