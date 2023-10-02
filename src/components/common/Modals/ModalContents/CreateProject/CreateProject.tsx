import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Button } from "../../../Button/Button";
import { Error } from "../../../Error/Error";
import { useDispatch } from "react-redux";
import { setModalClose } from "../../../../../store/reducers/modal-reducer";
import { setCurrentProject, setNewProject } from "../../../../../store/reducers/project-reducer";
import { createId } from "../../../../libs/utils/createId";
import modalStyles from '../ModalContents.module.scss'
import styles from './CreateProject.module.scss'
import classNames from "classnames";

export const CreateProjectModal = () => {
    const dispatch = useDispatch()
    
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')

    const handleInputOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        setInputValue(value)
    }, [])

    const closeModal = useCallback(() => {
        dispatch(setModalClose('create-project'))
        setInputValue('')
    }, [dispatch])

    const handleCreateProjectOnClick = useCallback(() => {
        dispatch(setNewProject({id: createId(), projectName: inputValue}))
        closeModal()
    }, [dispatch, inputValue, closeModal])

    const handleCancelCreateProjectOnClick = useCallback(() => {
        closeModal()
    }, [closeModal])

    useEffect(() => {
        return () => {
            dispatch(setCurrentProject(null))
        }
    }, [dispatch])
    
    return (
        <section className={classNames(modalStyles.wrapper, styles.wrapper)}>
            <input 
                className={styles.input}
                value={inputValue}
                onChange={handleInputOnChange}
                placeholder="Project name"
                title='Only the next 50 characters 0-9a-zA-Zа-яА-ЯЁё,./()*+=_!"№;%:? <>-'
            />
            {error ? <Error errorText={error} /> : null}
            <div className={modalStyles.buttons}>
                <Button 
                    text="Create project"
                    onClick={handleCreateProjectOnClick}
                />
                <Button
                    text="Cancel"
                    onClick={handleCancelCreateProjectOnClick}
                />
            </div>
        </section>
    )
}