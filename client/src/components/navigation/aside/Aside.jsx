import { useAuth } from '@/auth/AuthContext'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import Button from '@/components/Button/Button'
import Accordion from "@/components/Accordion/Accordion"

import ItemHeader from '@/components/navigation/aside/ItemHeader'
import ItemContent from '@/components/navigation/aside/ItemContent'

import { aboutPages } from '@/pages/about/uiData.js'

import './Aside.scss'

const Aside = ({ sidebarOpen, toggleSidebar }) => {

    const { isAuthenticated, isAdmin } = useAuth()
    const { isMobileViewport } = useBreakpoint()

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
                icon: { name: page.icon, position: 'left', size: 18 },
                to: `/about/${page.slug}`,
            })),
        },
        {
            label: 'Landing Pages',
            icon: { name: 'IconLayout', position: 'left', size: 18 },
            show: isAuthenticated,
            children: sortedAboutPages.map(page => ({
                label: page.label,
                icon: { name: page.icon, position: 'left', size: 18 },
                to: `/about/${page.slug}`,
            })),
        },
    ]

    const visibleItems = NAV_ITEMS.filter(item => item.show)

    return (
        <>
            <aside className={`nav-sidebar ${sidebarOpen ? "open" : "closed"} ${isMobileViewport ? "nav-sidebar-mobile" : ""}`}>

                <div className="nav-sidebar-top d-flex align-items-center gap-1">
                    {/* <button className="hamburger" onClick={() => toggleSidebar()}>
                        ☰
                    </button> */}
                    <Button
                        variant="empty"
                        icon={{ name: 'IconList', position: 'center', size: 18, color: 'var(--color-text)' }}
                        className="hamburger"
                        onClick={() => toggleSidebar()}
                    />
                </div>

                <nav className="nav-sidebar-main">

                    <Accordion
                        items={visibleItems}
                        allowMultiple={false}
                        className="nav-accordion-root"
                        renderHeader={(item, isOpen) => (
                            <ItemHeader
                                item={item}
                                isOpen={isOpen}
                                sidebarOpen={sidebarOpen}
                                isMobileViewport={isMobileViewport}
                                toggleSidebar={toggleSidebar}
                            />
                        )}
                        renderContent={(item) => (
                            <ItemContent
                                item={item}
                                sidebarOpen={sidebarOpen}
                                isMobileViewport={isMobileViewport}
                                toggleSidebar={toggleSidebar}
                            />
                        )}
                    />

                </nav>
            </aside>

            {sidebarOpen && (
                <div
                    className={`nav-overlay open`}
                    onClick={() => toggleSidebar(false)}
                />
            )}
        </>
    )
}

export default Aside