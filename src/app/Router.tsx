import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectsPage from "../pages/ProjectsPage";
import TasksPage from "../pages/TasksPage"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ProjectsPage/>} />
            <Route path="/tasks" element={<TasksPage/>} />
            <Route/>
        </Routes>
    )
}

export default AppRouter