import React, { FC, ReactNode } from "react"
import { useModal } from "../../../libs/hooks/useModal"
import { createPortal } from "react-dom"
import styles from './ModalWrapper.module.scss'

type ModalProps = {
    children: ReactNode
    isModalOpen: boolean
}

export const ModalWrapper: FC<ModalProps> = ({
    children,
    isModalOpen
}) => {
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