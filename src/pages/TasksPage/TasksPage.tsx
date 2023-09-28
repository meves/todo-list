import React from "react";
import { Layout } from "../../components/Layout/Layout";
import classNames from "classnames";
import pageStyles from './../Page.module.scss'
import styles from './TasksPage.module.scss'
import { Queue } from "../../components/Tasks/Queue/Queue";
import { Development } from "../../components/Tasks/Development/Development";
import { Done } from "../../components/Tasks/Done/Done";
import { ModalWrapper } from "../../components/common/Modals/Modal/ModalWrapper";
import { useSelector } from "react-redux";
import { selectModalOpen } from "../../store/reducers/modal-reducer";
import { DeleteTaskModal } from "../../components/common/Modals/ModalContents/DeleteTask/DeleteTask";
import { NotDeleteTaskModal } from "../../components/common/Modals/ModalContents/NotDeleteTask/NotDeleteTask";

const TasksPage = () => {
    const {
        "delete-task": isDeleteTaskModalOpen,
        "not-delete-task": isNotDeleteTaskModalOpen
    } = useSelector(selectModalOpen)
    return (
        <>
        <Layout>
            <main className={classNames(pageStyles.wrapper, styles.wrapper, "tasks-container")} >
                <Queue/>
                <Development/>
                <Done/>
            </main>
        </Layout>

        <ModalWrapper
            isModalOpen={isDeleteTaskModalOpen}
        > <DeleteTaskModal/>
        </ModalWrapper>

        <ModalWrapper
            isModalOpen={isNotDeleteTaskModalOpen}
        > <NotDeleteTaskModal/>
        </ModalWrapper>
        </>
    )
}

export default TasksPage