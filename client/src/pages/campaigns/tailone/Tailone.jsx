import Header from './components/header/Header'
import Showcase from './components/showcase/Showcase'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Icon from '@/components/Icons/Icon'
import Image from '@/components/Image/Image'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
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
        image: 'pexels-david-escala-de-almeida-1100840-24233281.jpg',
    },
    {
        name: 'Jane Smith',
        role: 'CTO',
        image: 'pexels-michael-obstoj-1772571864-31853114.jpg',
    },
    {
        name: 'Emily Johnson',
        role: 'CFO',
        image: 'pexels-julia-creative-401530010-15191718.jpg',
    },
    {
        name: 'Michael Brown',
        role: 'COO',
        image: 'pexels-ionelceban-16586554.jpg',
    },
]

const Tailone = () => {
    return (
        <div className="tailone-page">

            <Header />

            <Showcase />

            <Banner />

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
                                    <Image file={member.image} alt={member.image}/>
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

        </div>  
    )
}

export default Tailone