import React from "react";
import { Layout } from "../components/Layout/Layout";
import styles from './Page.module.scss'
import classNames from "classnames";

const TasksPage = () => {
    return (
        <Layout>
            <main className={classNames(styles.wrapper, 'main-container')} >
                Tasks Page
            </main>
        </Layout>
    )
}

export default TasksPage