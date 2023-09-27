import React from "react";
import { Layout } from "../../components/Layout/Layout";
import classNames from "classnames";
import pageStyles from './../Page.module.scss'
import styles from './TasksPage.module.scss'
import { Queue } from "../../components/Tasks/Queue/Queue";
import { Development } from "../../components/Tasks/Development/Development";
import { Done } from "../../components/Tasks/Done/Done";

const TasksPage = () => {
    return (
        <Layout>
            <main className={classNames(pageStyles.wrapper, styles.wrapper, "tasks-container")} >
                <Queue/>
                <Development/>
                <Done/>
            </main>
        </Layout>
    )
}

export default TasksPage