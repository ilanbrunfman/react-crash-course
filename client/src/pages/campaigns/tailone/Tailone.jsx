import Header from './components/header/Header'
import Showcase from './components/showcase/Showcase'
import Icon from '@/components/Icons/Icon'
import './Tailone.scss'

const SERVICES = [
    {
        icon: 'IconTable',
        title: 'Web Development',
        subtitle: 'Modern and scalable websites built with clean architecture and performance in mind.',
    },
    {
        icon: 'IconTabs',
        title: 'UI/UX Design',
        subtitle: 'Beautiful and user-focused interfaces designed for engagement and conversion.',
    },
    {
        icon: 'IconStack',
        title: 'Responsive Design',
        subtitle: 'Fully responsive layouts optimized for desktop, tablet, and mobile experiences.',
    },
    {
        icon: 'IconBrowsers',
        title: 'Performance Optimization',
        subtitle: 'Fast-loading experiences with optimized assets, SEO structure, and accessibility.',
    },
    {
        icon: 'IconMagnifyingGlass',
        title: 'Secure Solutions',
        subtitle: 'Reliable development practices with security, stability, and scalability in mind.',
    },
    {
        icon: 'IconLayout',
        title: 'Digital Strategy',
        subtitle: 'Helping brands grow with modern technologies and strategic digital experiences.',
    },
]

const TEAM = [
    {
        name: 'John Doe',
        role: 'CEO',
        image: 'https://via.placeholder.com/300',
    },
    {
        name: 'Jane Smith',
        role: 'CTO',
        image: 'https://via.placeholder.com/300',
    },
    {
        name: 'Emily Johnson',
        role: 'CFO',
        image: 'https://via.placeholder.com/300',
    },
    {
        name: 'Michael Brown',
        role: 'COO',
        image: 'https://via.placeholder.com/300',
    },
]

const Tailone = () => {
    return (
        <div className="tailone-page">

            <Header />

            <Showcase />

            <section id="about" className="about-section py-5">
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

                    {/* HEADER */}
                    <div className="section-heading">
                        <h5 className="section-badge">Our Team</h5>
                        <h2 className="section-title">Meet the Experts Behind Our Success</h2>
                        <p className="section-subtitle">A passionate group of designers, developers, and strategists working together to build exceptional digital experiences.</p>
                    </div>

                    <div className="team-grid">
                        {TEAM.map((member) => (
                            <div key={member.name} className="team-card">
                                <div className="team-image">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="contact-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-grid grid-2 gap-3">
                            <div className="col">
                                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-100 p-4 rounded mt-6">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-column align-items-center gap-2">
                            <p className="text-sm">&copy; 2025 Tailone. All rights reserved.</p>
                            <div className="d-flex gap-3">
                                <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                                <a href="#" className="text-gray-600 hover:text-gray-800">Terms of Service</a>
                                <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>  
    )
}

export default Tailone