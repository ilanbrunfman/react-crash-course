import RouterLink from '@/components/navigation/RouterLink/RouterLink';

const Aside = ({ 
    sidebarOpen, 
    toggleSidebar,
    isAdmin, 
    isAuthenticated
}) => {

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
        <aside className={`nav-sidebar ${sidebarOpen ? "open" : "closed"}`}>
            <div className={`nav-sidebar-top ${ sidebarOpen ? "open" : "closed" }`}>
                <button className="hamburger" onClick={toggleSidebar}>☰</button>
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
                    >
                        <span>{item.label}</span>
                    </RouterLink>
                ))}
            </nav>
        </aside>
    )
}

export default Aside;