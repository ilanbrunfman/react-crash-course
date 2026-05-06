import RouterLink from '@/components/RouterLink/RouterLink'
import Button from '@/components/Button/Button'

const ItemHeader = ({
    item,
    isOpen,
    sidebarOpen,
    isMobileViewport,
    toggleSidebar,
}) => {

    const hasChildren = !!item.children?.length

    // 👉 simple link (no accordion)
    if (!hasChildren) {
        return (
            <RouterLink
                to={item.to}
                className={({ isActive }) =>
                    ["nav-link", isActive && "active"]
                        .filter(Boolean)
                        .join(" ")
                }
                icon={item.icon}
            >
                {sidebarOpen && <span>{item.label}</span>}
            </RouterLink>
        )
    }

    // 👉 accordion trigger
    return (
        <Button
            variant="empty"
            icon={item.icon}
            className={[
                "nav-link accordion-trigger",
                isOpen && "active"
            ].filter(Boolean).join(" ")}
            onClick={() => {
                // open sidebar if collapsed (desktop)
                if (!isMobileViewport && !sidebarOpen) {
                    toggleSidebar(true)
                }
            }}
        >
            {sidebarOpen && item.label}
        </Button>
    )
}

export default ItemHeader