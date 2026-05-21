import { useState, useEffect } from "react"

import { PORTFOLIO_ITEMS, SERVICES, TEAM } from "./data/data"

import Header from './components/header/Header'
import Showcase from './components/showcase/Showcase'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Icon from '@/components/Icons/Icon'
import Image from '@/components/Image/Image'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollTop from './components/scrollTop/ScrollTop'
import Modal from './components/Modal/Modal'
import './Tailone.scss'



const Tailone = () => {

    const [selectedProject, setSelectedProject] = useState(null)
    
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setSelectedProject(null)
            }
        }
    
        window.addEventListener('keydown', handleEscape)
    
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleEscape)
        }
    }, [selectedProject])

    return (
        <div className="tailone-page">

            <Header />

            <Showcase />

            {/* <Banner /> */}

            <section id="portfolio" className="portfolio-section">

                <div className="container">

                    <div className="section-heading">
                        <span className="section-badge">Portfolio</span>
                        <h2 className="section-title">Our Latest Projects</h2>
                        <p className="section-subtitle">Explore some of the digital products and experiences we’ve crafted for startups, brands, and businesses.</p>
                    </div>

                    {/* GRID */}
                    <div className="portfolio-grid">

                        {PORTFOLIO_ITEMS.map((item) => (
                            <article
                                key={item.title}
                                className="portfolio-card"
                                onClick={() => setSelectedProject(item)}
                            >

                                {/* IMAGE */}
                                <div className="portfolio-image">

                                   <Image
                                        key={item.title}
                                        src={item.image}
                                        alt={item.title}
                                        lazy={true}
                                    />

                                    <div className="portfolio-overlay">

                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="portfolio-btn"
                                        >View Project</a>

                                    </div>

                                </div>

                                {/* CONTENT */}
                                <div className="portfolio-content">

                                    <span className="portfolio-category">
                                        {item.category}
                                    </span>

                                    <h3 className="portfolio-title">
                                        {item.title}
                                    </h3>

                                </div>

                            </article>
                        ))}

                    </div>

                    {selectedProject && (
                        <Modal
                            selectedProject={selectedProject}
                            setSelectedProject={setSelectedProject}
                        />
                    )}

                </div>

            </section>

            <About />

            <section id="services" className="services-section py-5">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-12">

                            <div className="section-heading">
                                <h5 className="section-badge">What We Do</h5>
                                <h2 className="section-title">Solutions Designed For Modern Businesses</h2>
                                <p className="section-subtitle">We create beautiful digital experiences with modern technologies, scalable architecture, and clean design systems that help brands grow online.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="services-grid col-12 d-grid grid-3 gap-3">
                            {SERVICES.map((service) => (
                                <article key={service.title} className="service-card">
                                    <div className="service-icon">
                                        <Icon name={service.icon} />
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-subtitle">{service.subtitle}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="team" className="team-section">
                <div className="container">

                    <div className="section-heading">
                        <h5 className="section-badge">Our Team</h5>
                        <h2 className="section-title">Meet the Experts Behind Our Success</h2>
                        <p className="section-subtitle">A passionate group of designers, developers, and strategists working together to build exceptional digital experiences.</p>
                    </div>

                    <div className="team-grid">
                        {TEAM.map((member) => (
                            <div key={member.name} className="team-card">
                                <div className="team-image">
                                    <Image file={member.image} alt={member.image} lazy={true}/>
                                </div>
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />

            <Footer />

            <ScrollTop />

        </div>  
    )
}

export default Tailone