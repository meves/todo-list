import React, { useCallback } from "react";
import { Layout } from "../components/Layout/Layout";
import { Button } from "../components/common/Button/Button";
import { Projects } from "../components/Projects/Projects/Projects";
import classNames from "classnames";
import styles from './Page.module.scss'
import { ModalWrapper } from "../components/common/Modals/Modal/ModalWrapper";
import { CreateProjectModal } from "../components/common/Modals/ModalContents/CreateProject/CreateProject";
import { useDispatch, useSelector } from "react-redux";
import { selectModalOpen, setModalOpen } from "../store/reducers/modal-reducer";
import { DeleteProjectModal } from "../components/common/Modals/ModalContents/DeleteProject/DeleteProject";
import { CreateTaskModal } from "../components/common/Modals/ModalContents/CreateTask/CreateTask";
import { NotDeleteProjectModal } from "../components/common/Modals/ModalContents/NotDeleteProject/NotDeleteProject";

const ProjectsPage = () => {
    const dispatch = useDispatch()
    
    const { 
        "create-project" : isCreateNewProjectModalOpen, 
        "delete-project" : isDeleteProjectModalOpen,
        "create-task" : isCreateTaskModalOpen,
        "not-delete-project" : isNotDeleteProjectModalOpen
    } = useSelector(selectModalOpen)
    
    const handleAddNewProjectOnClick = useCallback(() => {
        dispatch(setModalOpen('create-project'))
    }, [dispatch])

    return (
        <>
        <Layout>
            <main className={classNames(styles.wrapper, 'main-container')} >
                <Button 
                    text="Add new project"
                    onClick={handleAddNewProjectOnClick}
                />
                <Projects/>
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

        <ModalWrapper
            isModalOpen={isCreateTaskModalOpen}
        > <CreateTaskModal/>            
        </ModalWrapper>

        <ModalWrapper
            isModalOpen={isNotDeleteProjectModalOpen}
        ><NotDeleteProjectModal/>
        </ModalWrapper>
        </>
    )
}

export default ProjectsPage