import { Outlet } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useBreakpoint } from '@/hooks/useBreakpoint'
import Aside from '@/components/navigation/aside/Aside';
import Header from '@/components/navigation/header/Header';
// import { ModalProvider } from '@/context/modal/ModalContext';
// import { ToastProvider } from '@/context/toast/ToastContext';
import ModalHost from '@/context/modal/ModalHost';

import './MainLayout.scss'

const MainLayout = () => {
    
    const [sidebarOpen, setSidebarOpen] = useState(() => {
        const saved = localStorage.getItem("sidebarOpen");
        return saved !== null ? JSON.parse(saved) : true;
    }); 
    const { isMobileViewport } = useBreakpoint()

    const toggleSidebar = (value) => {
        setSidebarOpen(prev =>
            typeof value === "boolean" ? value : !prev
        )
    }

    // save sidebar state
    useEffect(() => {
        localStorage.setItem("sidebarOpen", JSON.stringify(sidebarOpen));
    }, [sidebarOpen]);

    // close sidebar when entering mobile viewport
    useEffect(() => {
        if (isMobileViewport && sidebarOpen) {
            setSidebarOpen(false);
        }
    }, [isMobileViewport]);
    

    return (
        <div className={`dashboard ${sidebarOpen ? "open" : "closed"}`}>
            <Aside
                sidebarOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
            />

            <Header
                sidebarOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
            />
            <main className="dashboard-main">
                <Outlet />
            </main>
            <ModalHost />
        </div>
    )
}

export default MainLayout