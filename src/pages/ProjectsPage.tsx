import React, { useCallback } from "react";
import { Layout } from "../components/Layout/Layout";
import { Button } from "../components/common/Button/Button";
import { ProjectCards } from "../components/Projects/Cards/Cards";
import classNames from "classnames";
import styles from './Page.module.scss'
import { ModalWrapper } from "../components/common/Modals/Modal/ModalWrapper";
import { CreateProjectModal } from "../components/common/Modals/ModalContents/CreateProject/CreateProject";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCreateNewProjectModalOpen, selectIsDeleteProjectModalOpen, setIsCreateNewProjectModalOpen } from "../store/reducers/modal-reducer";
import { DeleteProjectModal } from "../components/common/Modals/ModalContents/DeleteProject/DeleteProject";

const ProjectsPage = () => {
    const dispatch = useDispatch()
    const isCreateNewProjectModalOpen = useSelector(selectIsCreateNewProjectModalOpen)
    const isDeleteProjectModalOpen = useSelector(selectIsDeleteProjectModalOpen)

    const handleAddNewProjectOnClick = useCallback(() => {
        dispatch(setIsCreateNewProjectModalOpen())
    }, [dispatch])

    return (
        <>
        <Layout>
            <main className={classNames(styles.wrapper, 'main-container')} >
                <Button 
                    text="Add new project"
                    onClick={handleAddNewProjectOnClick}
                />
                <ProjectCards/>
            </main>
        </Layout>

        <ModalWrapper
            isModalOpen={isCreateNewProjectModalOpen}
        > <CreateProjectModal/>
        </ModalWrapper>
        
        <ModalWrapper
            isModalOpen={isDeleteProjectModalOpen}
        > <DeleteProjectModal/>
        </ModalWrapper>
        </>
    )
}

export default ProjectsPage