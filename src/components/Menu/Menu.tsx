import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss'

export const Menu = () => {
    return (
        <nav className={styles.nav}>
            <NavLink 
                to="/"
                className={styles.menuItem}    
            >Projects</NavLink>
            <NavLink 
                to="/tasks"
                className={styles.menuItem}
            >Tasks</NavLink>
        </nav>
    )
}