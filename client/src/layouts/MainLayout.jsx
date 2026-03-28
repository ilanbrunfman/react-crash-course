import { Outlet } from 'react-router-dom';
import { useState } from "react";
import Navigation from '@/components/navigation/Navigation';
// import { ModalProvider } from '@/context/modal/ModalContext';
// import { ToastProvider } from '@/context/toast/ToastContext';
import ModalHost from '@/context/modal/ModalHost';

import './MainLayout.scss'

const MainLayout = () => {
    
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className={`dashboard ${sidebarOpen ? "open" : "closed"}`}>
            <Navigation 
                sidebarOpen={sidebarOpen}
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />
            <main>
                <Outlet />
            </main>
            <ModalHost />
        </div>
    )
}

export default MainLayout