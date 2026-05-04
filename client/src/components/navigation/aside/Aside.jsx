import { useState } from 'react'
import { useAuth } from '@/auth/AuthContext'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import RouterLink from '@/components/RouterLink/RouterLink';
import Item from './Item'

import { aboutPages } from '@/pages/about/uiData.js'

import './Aside.scss'

const Aside = ({ 
    sidebarOpen, 
    toggleSidebar,
}) => {

    const { isAuthenticated, isAdmin } = useAuth()
    const { isMobileViewport } = useBreakpoint()
    const [openSection, setOpenSection] = useState(null)

    const toggleSection = (key) => {
        setOpenSection(prev => (prev === key ? null : key))
    }

    const sortedAboutPages = [...aboutPages].sort((a, b) =>
        a.label.localeCompare(b.label)
    )

    const NAV_ITEMS = [
        {
            label: 'Home',
            to: '/',
            icon: { name: 'IconHome', position: 'left', size: 18 },
            show: isAdmin,
        },
        {
            label: 'UI Components',
            icon: { name: 'IconStack', position: 'left', size: 18 },
            show: isAuthenticated,
            children: sortedAboutPages.map(page => ({
                label: page.label,
                to: `/about/${page.slug}`,
            })),
        },
    ];

    return (
        <>
            <aside className={`nav-sidebar ${sidebarOpen ? "open" : "closed"} ${isMobileViewport ? "nav-sidebar-mobile" : ""}`}>

                <div className="nav-sidebar-top d-flex align-items-center gap-1">
                    <button className="hamburger" onClick={() => toggleSidebar()}>☰</button>
                </div>

                <nav className="nav-sidebar-main">
                    {NAV_ITEMS
                    .filter(item => item.show)
                    .map(item => (
                        <Item
                            key={item.to || item.label}
                            item={item}
                            sidebarOpen={sidebarOpen}
                            isOpen={openSection === item.label}
                            isMobileViewport={isMobileViewport}
                            onToggle={() => toggleSection(item.label)}
                            toggleSidebar={toggleSidebar}
                            onNavigate={() => {
                                if (isMobileViewport) toggleSidebar(false)
                            }}
                        /> 
                    ))}
                </nav>
            </aside>
            
            {sidebarOpen && <div className={`nav-overlay ${ sidebarOpen ? "open" : "closed" }`} onClick={() => toggleSidebar(false)} />}
        </>
    )
}

export default Aside;