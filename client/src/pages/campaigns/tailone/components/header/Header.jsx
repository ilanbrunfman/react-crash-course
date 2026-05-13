import { useEffect, useRef, useState } from 'react'
import './header.scss'

const NAV_ITEMS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
]

const TailoneHeader = () => {
    const [mobileOpen, setMobileOpen] = useState(false)

    const [hidden, setHidden] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const mobileMenuRef = useRef(null)
    const hamburgerRef = useRef(null)

    // ======================================================
    // Close mobile menu on outside click
    // ======================================================

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const clickedOutsideMenu =
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target)

            const clickedOutsideButton =
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)

            if (clickedOutsideMenu && clickedOutsideButton) {
                setMobileOpen(false)
            }
        }

        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [])

    // ======================================================
    // Header scroll behavior
    // ======================================================

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // add background after scrolling
            setScrolled(currentScrollY > 20)

            // disable hide header on mobile
            if (window.innerWidth <= 991) {
                setHidden(false)
                return
            }

            // scrolling down
            if (
                currentScrollY > lastScrollY &&
                currentScrollY > 120
            ) {
                setHidden(true)
            } else {
                // scrolling up
                setHidden(false)
            }

            lastScrollY = currentScrollY
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScrollToSection = (href) => {
        const section = document.querySelector(href)

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }

        setMobileOpen(false)
    }

    return (
        <header
            className={`
                tailone-header
                ${hidden ? 'hidden' : ''}
                ${scrolled ? 'scrolled' : ''}
            `}
        >
            <div className="header-wrapper">

                {/* Logo */}
                <a href="#home" className="logo">
                    <span>Tailone</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    {NAV_ITEMS.map((item) => (
                        // <a
                        //     key={item.href}
                        //     href={item.href}
                        //     className="nav-link"
                        // >
                        //     {item.label}
                        // </a>
                        <button
                            key={item.href}
                            className="nav-link"
                            onClick={() => handleScrollToSection(item.href)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Hamburger */}
                <button
                    ref={hamburgerRef}
                    className={`hamburger ${mobileOpen ? 'active' : ''}`}
                    onClick={() => setMobileOpen(prev => !prev)}
                    aria-label="Toggle navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>


            </div>

            <div className="header-wrapper-mobile">
                {/* Mobile Menu */}
                <div
                    ref={mobileMenuRef}
                    className={`mobile-nav ${mobileOpen ? 'open' : ''}`}
                >
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="mobile-nav-link"
                            onClick={() => setMobileOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default TailoneHeader