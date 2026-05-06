import RouterLink from '@/components/RouterLink/RouterLink'

const ItemContent = ({
    item,
    sidebarOpen,
    isMobileViewport,
    toggleSidebar,
}) => {

    if (!item.children) return null

    return (
        <div className="accordion-content open">
            {sidebarOpen && item.children.map((child, index) => (
                <RouterLink
                    key={index}
                    to={child.to}
                    icon={child.icon}
                    className={({ isActive }) =>
                        ["nav-sublink", isActive && "active"]
                            .filter(Boolean)
                            .join(" ")
                    }
                    onClick={() => {
                        if (isMobileViewport) {
                            toggleSidebar(false)
                        }
                    }}
                >
                    <span>{child.label}</span>
                </RouterLink>
            ))}
        </div>
    )
}

export default ItemContent