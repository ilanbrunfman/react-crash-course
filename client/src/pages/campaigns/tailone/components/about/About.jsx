import './About.scss'
import AboutImage from '@/assets/images/undraw_team-collaboration_phnf.svg'

const ABOUT_POINTS = [
    'Modern UI/UX design focused on conversion',
    'Scalable and maintainable code architecture',
    'Performance optimized for all devices',
    'Clean and reusable component system',
]

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">

                <div className="about-wrapper">

                    {/* LEFT IMAGE */}
                    <div className="about-image">
                        <img
                            src={AboutImage}
                            alt="About Tailone"
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

                        <p className="section-subtitle">
                            We help startups and businesses design and develop
                            high-quality digital products that are fast, scalable,
                            and user-focused.
                        </p>

                        <ul className="about-list">
                            {ABOUT_POINTS.map((item) => (
                                <li key={item}>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* OPTIONAL STATS */}
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