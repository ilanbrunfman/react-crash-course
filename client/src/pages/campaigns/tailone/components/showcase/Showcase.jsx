import { useEffect, useState } from 'react'
import './Showcase.scss'
import TeamCollaboration from '@/assets/images/undraw_team-collaboration_phnf.svg'

const WORDS = [
    'Modern Websites',
    'Creative Solutions',
    'Powerful Brands',
    'Digital Experiences',
]

const Showcase = () => {
    const [text, setText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = WORDS[wordIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, text.length + 1))

                if (text === currentWord) {
                    setTimeout(() => {
                        setIsDeleting(true)
                    }, 1200)
                }
            } else {
                setText(currentWord.substring(0, text.length - 1))

                if (text === '') {
                    setIsDeleting(false)
                    setWordIndex((prev) => (prev + 1) % WORDS.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [text, isDeleting, wordIndex])

    const handleScrollToSection = () => {
        const section = document.querySelector('#about')

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }

    return (
        <section className="tailone-showcase" id="home">
            <div className="container">
                <div className="showcase-wrapper">

                    {/* LEFT CONTENT */}
                    <div className="showcase-content">

                        <span className="showcase-badge">
                            Tailone Landing Page
                        </span>

                        <h1 className="showcase-title">
                            Build&nbsp;
                            <span className="animated-text">
                                {text}
                            </span>
                        </h1>

                        <p className="showcase-subtitle">
                            We help startups and businesses create beautiful,
                            high-performing digital products with modern design
                            and clean development.
                        </p>

                        <div className="showcase-actions">

                            <button
                                className="primary-btn"
                                onClick={handleScrollToSection}
                            >
                                Explore Services
                            </button>

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="secondary-btn"
                            >
                                Github
                            </a>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="showcase-image">
                        {/* <img
                            src="https://undraw.co/api/illustrations/fe6376aa-3d10-4c25-9f9d-7093f25a5f21"
                            alt="Showcase Illustration"
                        /> */}
                        <img
                            src={TeamCollaboration}
                            alt="Team Collaboration"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Showcase