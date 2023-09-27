import React, { useCallback } from "react";
import { Layout } from "../components/Layout/Layout";
import { Button } from "../components/common/Button/Button";
import { ProjectCards } from "../components/Projects/Cards/Cards";
import classNames from "classnames";
import styles from './Page.module.scss'
import { Modal } from "../components/common/Modals/Modal";
import { CreateProject } from "../components/Projects/CreateProject/CreateProject";
import { useDispatch } from "react-redux";
import { setIsModalOpen } from "../store/reducers/modal-reducer";

const ProjectsPage = () => {
    const dispatch = useDispatch()

    const handleAddNewProjectOnClick = useCallback(() => {
        dispatch(setIsModalOpen())
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
        <Modal>
            <CreateProject/>
        </Modal>
        </>
    )
}

export default ProjectsPage