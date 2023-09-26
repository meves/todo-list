import React from "react";
import styles from './Header.module.scss'
import { Menu } from "../Menu/Menu";
import classNames from "classnames";

export const Header = () => {
    return (
        <header className={classNames(styles.header, 'main-container')} >
            <div className={styles.logo}>
                TodoList
            </div>
            <Menu/>
        </header>
    )
}