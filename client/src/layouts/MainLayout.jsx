import { Outlet } from 'react-router-dom';
import { useState, useEffect } from "react";
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

    const toggleSidebar = (value) => {
        setSidebarOpen(prev =>
            typeof value === "boolean" ? value : !prev
        )
    }
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 767px)").matches
    );

    // save sidebar state
    useEffect(() => {
        localStorage.setItem("sidebarOpen", JSON.stringify(sidebarOpen));
    }, [sidebarOpen]);

    // // detect mobile
    useEffect(() => {
        const media = window.matchMedia("(max-width: 767px)");

        const handler = (e) => setIsMobile(e.matches);

        media.addEventListener("change", handler);

        return () => media.removeEventListener("change", handler);
    }, []);

    // close sidebar when entering mobile
    useEffect(() => {
        if (isMobile && sidebarOpen) {
            setSidebarOpen(false);
        }
    }, [isMobile]);
    

    return (
        <div className={`dashboard ${sidebarOpen ? "open" : "closed"}`}>
            <Aside
                sidebarOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
                isMobile={isMobile}
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