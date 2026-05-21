import Icon from '@/components/Icons/Icon'
import Button from '@/components/Button/Button'
import RouterLink from '@/components/RouterLink/RouterLink'
import './footer.scss'

const FOOTER_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
]

const SOCIAL_LINKS = [
    { icon: 'IconGithub', href: 'https://github.com', },
    { icon: 'IconLinkedin', href: 'https://linkedin.com', },
    { icon: 'IconTwitter', href: 'https://twitter.com', },
]   

const Footer = () => {
    const handleScrollToSection = (href) => {
        const section = document.querySelector(href)

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <footer className="tailone-footer">

            <div className="container">

                <div className="footer-top">
                    <div className="footer-brand">
                        <Button
                            variant="empty"
                            className="footer-logo"
                            onClick={handleScrollTop}
                            aria-label="Tailone-footer-logo"
                        >Tailone</Button>
                        {/* <h3 className="footer-logo">Tailone</h3> */}
                        <p className="footer-description">Building modern digital experiences for startups, creators, and businesses.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Navigation</h4>

                        {FOOTER_LINKS.map((item) => (
                            <Button
                                key={item.href}
                                onClick={ () => handleScrollToSection(item.href) }
                            >
                                {item.label}
                            </Button>
                        ))}
                    </div>

                    <div className="footer-social">
                        <h4>Social</h4>

                        <div className="social-links">
                            {SOCIAL_LINKS.map((item) => (
                                <RouterLink 
                                    key={item.href}
                                    href={item.href}
                                    icon={{ name: item.icon }}
                                />
                            ))}
                        </div>

                    </div>

                </div>

                <div className="footer-bottom">
                    <p>© 2026 Tailone. All rights reserved.</p>

                    <div className="footer-legal">
                        <RouterLink href="#">Privacy Policy</RouterLink>
                        <RouterLink href="#">Terms of Service</RouterLink>
                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer