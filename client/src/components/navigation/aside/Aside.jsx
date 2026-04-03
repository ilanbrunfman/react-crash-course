import { useState, useEffect } from "react";
import { useAuth } from '@/auth/AuthContext'

import RouterLink from '@/components/navigation/RouterLink/RouterLink';

import './Aside.scss'

const Aside = ({ 
    sidebarOpen, 
    toggleSidebar,
    isMobile,
}) => {

    const { isAuthenticated, isAdmin } = useAuth()

    

    const NAV_ITEMS = [
        {
            label: 'Home',
            to: '/',
            icon: { name: 'IconHome', position: 'left', size: 18 },
            show: isAdmin,
        },
        {
            label: 'UI Components',
            to: '/about',
            icon: { name: 'IconUser', position: 'left', size: 18 },
            show: isAuthenticated,
        },
    ];

    return (
        <>
            <aside className={`nav-sidebar ${sidebarOpen ? "open" : "closed"} ${isMobile ? "nav-sidebar-mobile" : ""}`}>

                <div className="nav-sidebar-top">
                    <button className="hamburger" onClick={() => toggleSidebar()}>☰</button>
                </div>

                <nav className="nav-sidebar-main">
                    {NAV_ITEMS.filter(item => item.show).map(item => (
                        <RouterLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                [   "nav-link",
                                    isActive && "active",
                                    sidebarOpen ? "open" : "closed"
                                ].filter(Boolean).join(" ")}
                            icon={item.icon}
                            onClick={() => {
                                if (isMobile) toggleSidebar(false)
                            }}
                        >
                            <span>{item.label}</span>
                        </RouterLink>
                    ))}
                </nav>
            </aside>
            
            {sidebarOpen && <div className={`nav-overlay ${ sidebarOpen ? "open" : "closed" }`} onClick={() => toggleSidebar(false)} />}
        </>
    )
}

export default Aside;