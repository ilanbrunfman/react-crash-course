import { useAuth } from '@/auth/AuthContext'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import RouterLink from '@/components/RouterLink/RouterLink';

import './Aside.scss'

const Aside = ({ 
    sidebarOpen, 
    toggleSidebar,
}) => {

    const { isAuthenticated, isAdmin } = useAuth()
    const { isMobileViewport } = useBreakpoint()

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
            icon: { name: 'IconStack', position: 'left', size: 18 },
            show: isAuthenticated,
        },
    ];

    return (
        <>
            <aside className={`nav-sidebar ${sidebarOpen ? "open" : "closed"} ${isMobileViewport ? "nav-sidebar-mobile" : ""}`}>

                <div className="nav-sidebar-top d-flex align-items-center gap-1">
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
                                if (isMobileViewport) toggleSidebar(false)
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