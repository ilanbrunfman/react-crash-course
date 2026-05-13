// import {
//     Github,
//     Linkedin,
//     Twitter,
// } from 'lucide-react'
import Icon from '@/components/Icons/Icon'
import './footer.scss'

const FOOTER_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
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

    return (
        <footer className="tailone-footer">

            <div className="container">

                <div className="footer-top">

                    {/* BRAND */}
                    <div className="footer-brand">

                        <h3 className="footer-logo">
                            Tailone
                        </h3>

                        <p className="footer-description">
                            Building modern digital experiences
                            for startups, creators, and businesses.
                        </p>

                    </div>

                    {/* LINKS */}
                    <div className="footer-links">

                        <h4>
                            Navigation
                        </h4>

                        {FOOTER_LINKS.map((item) => (
                            <button
                                key={item.href}
                                onClick={() =>
                                    handleScrollToSection(item.href)
                                }
                            >
                                {item.label}
                            </button>
                        ))}

                    </div>

                    {/* SOCIAL */}
                    <div className="footer-social">

                        <h4>
                            Social
                        </h4>

                        <div className="social-links">

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {/* <Github size={18} /> */}
                                <Icon name="IconGithub" />
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {/* <Linkedin size={18} /> */}
                                <Icon name="IconLinkedin" />
                            </a>

                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {/* <Twitter size={18} /> */}
                                <Icon name="IconHome" />
                            </a>

                        </div>

                    </div>

                </div>

                {/* BOTTOM */}
                <div className="footer-bottom">

                    <p>
                        © 2026 Tailone. All rights reserved.
                    </p>

                    <div className="footer-legal">

                        <a href="#">
                            Privacy Policy
                        </a>

                        <a href="#">
                            Terms of Service
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer