import RouterLink from '@/components/RouterLink/RouterLink'
import Accordion from "@/components/Accordion/Accordion"
import Button from '@/components/Button/Button'

const Item = ({ 
    item,
    sidebarOpen,
    onNavigate,
    isMobileViewport,
    toggleSidebar,
}) => {

    const hasChildren = !!item.children?.length

    if (!hasChildren) {
        return (
            <RouterLink
                to={item.to}
                className={({ isActive }) =>
                    ["nav-link", isActive && "active",]
                        .filter(Boolean)
                        .join(" ")
                }
                icon={item.icon}
                onClick={onNavigate}
            >
                { sidebarOpen && <span>{item.label}</span> }
            </RouterLink>
        )
    }

    return (
        <Accordion
            items={[item]}
            allowMultiple={false}
            renderHeader={(item, isOpen) => (
                <Button
                    variant="empty"
                    icon={item.icon}
                    className={[
                        "nav-link accordion-trigger",
                        isOpen && "active"
                    ].filter(Boolean).join(" ")}
                    onClick={() => {
                        if (!isMobileViewport && !sidebarOpen) {
                            toggleSidebar(true)
                        }
                    }}
                >
                    {sidebarOpen && item.label}
                </Button>
            )}
            renderContent={(item) => (
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
                            onClick={onNavigate}
                        >
                            <span>{child.label}</span>
                        </RouterLink>
                    ))}
                </div>
            )}
        />
    )
}

export default Item