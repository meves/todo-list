import React, { ChangeEvent, useCallback, useState } from "react";
import styles from './CreateProject.module.scss'
import { Button } from "../../../Button/Button";
import { Error } from "../../../Error/Error";
import { useDispatch } from "react-redux";
import { setIsCreateNewProjectModalClose } from "../../../../../store/reducers/modal-reducer";
import { setNewProject } from "../../../../../store/reducers/project-reducer";
import { createId } from "../../../../libs/utils/createId";

export const CreateProjectModal = () => {
    const dispatch = useDispatch()
    
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')

    const handleInputOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        setInputValue(value)
    }, [])

    const closeModal = useCallback(() => {
        dispatch(setIsCreateNewProjectModalClose())
        setInputValue('')
    }, [dispatch])

    const handleCreateProjectOnClick = useCallback(() => {
        dispatch(setNewProject({id: createId(), projectName: inputValue}))
        closeModal()
    }, [dispatch, inputValue, closeModal])

    const handleCancelCreateProjectOnClick = useCallback(() => {
        closeModal()
    }, [closeModal])
    
    return (
        <section className={styles.wrapper}>
            <input 
                className={styles.input}
                value={inputValue}
                onChange={handleInputOnChange}
                placeholder="Project name"
                title='Only the next 50 characters 0-9a-zA-Zа-яА-ЯЁё,./()*+=_!"№;%:? <>-'
            />
            {error ? <Error errorText={error} /> : null}
            <div className={styles.buttons}>
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