import { useState } from 'react'

import './About.scss'

const ABOUT_TABS = [
    {
        id: 'design',
        label: 'Design',

        image: 'https://picsum.photos/1200/800?1',

        title: 'Modern UI/UX Design',

        description: 'We create beautiful and intuitive interfaces focused on user experience and conversion.',

        points: [
            'Clean and modern UI systems',
            'Mobile-first responsive design',
            'Design systems and consistency',
            'Conversion-focused experiences',
        ],
    },

    {
        id: 'development',
        label: 'Development',

        image: 'https://picsum.photos/1200/800?2',

        title: 'Scalable Development',

        description: 'We build scalable and maintainable applications using modern frontend technologies.',

        points: [
            'Reusable component architecture',
            'Performance optimized applications',
            'Clean and maintainable codebase',
            'Modern React ecosystem',
        ],
    },

    {
        id: 'team',
        label: 'Team',

        image: 'https://picsum.photos/1200/800?3',

        title: 'Strong Team Collaboration',

        description: 'Our collaborative workflow helps businesses move faster and build better products.',

        points: [
            'Agile development process',
            'Transparent communication',
            'Fast iteration cycles',
            'Client-focused delivery',
        ],
    },
]

const About = () => {
    const [activeTab, setActiveTab] = useState(ABOUT_TABS[0])

    return (
        <section id="about" className="about-section">
            <div className="container">

                <div className="about-wrapper">

                    {/* LEFT IMAGE */}
                    <div className="about-image">
                        <img
                            src={activeTab.image}
                            alt={activeTab.title}
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="about-content">

                        <span className="section-badge">
                            About Us
                        </span>

                        <h2 className="section-title">
                            We Build Modern Digital Experiences
                        </h2>

                        {/* TABS */}
                        <div className="about-tabs">

                            {ABOUT_TABS.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`tab-btn ${activeTab.id === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab.label}
                                </button>
                            ))}

                        </div>

                        {/* TAB CONTENT */}
                        <div className="about-tab-content">

                            <h3>
                                {activeTab.title}
                            </h3>

                            <p className="section-subtitle">
                                {activeTab.description}
                            </p>

                            <ul className="about-list">

                                {activeTab.points.map((item) => (
                                    <li key={item}>
                                        {item}
                                    </li>
                                ))}

                            </ul>

                        </div>

                        {/* STATS */}
                        <div className="about-stats">

                            <div className="stat">
                                <h3>50+</h3>
                                <p>Projects</p>
                            </div>

                            <div className="stat">
                                <h3>20+</h3>
                                <p>Clients</p>
                            </div>

                            <div className="stat">
                                <h3>5+</h3>
                                <p>Years</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default About