import { useState } from 'react'
import RouterLink from '@/components/RouterLink/RouterLink'
import Button from '@/components/Button/Button'

const Item = ({ 
    item,
    sidebarOpen,
    isOpen,
    onToggle,
    onNavigate,
    isMobileViewport,
    toggleSidebar,
}) => {
    // const [isOpen, setIsOpen] = useState(false)
    const hasChildren = !!item.children?.length
    const handleToggle = () => {
        // 👉 Always toggle accordion
        onToggle()

        // 👉 On mobile: ensure sidebar is open
        if (!isMobileViewport && !sidebarOpen) {
            toggleSidebar(true)
        }
    }

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
        <div className="nav-accordion">
            <Button
                variant="empty"
                icon={item.icon}
                className={[
                    "nav-link accordion-trigger",
                    isOpen && "active"
                ].filter(Boolean).join(" ")}
                onClick={handleToggle}
            >
                { sidebarOpen && item.label }
            </Button>

            <div className={`accordion-content ${isOpen && sidebarOpen ? "open" : ""}`}>
                {item.children.map((child, index) => (
                    <RouterLink
                        key={index}
                        to={child.to}
                        icon={{ name: 'IconUser',}}
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
        </div>
    )
}

export default Item