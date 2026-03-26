import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { usePageMeta } from "@/hooks/usePageMeta";
import Post from "./post/Post";

import './Resume.scss'

const ResumePage = () => {

    const navRefs = useRef([])
    const sectionRefs = useRef([])
    const [activeSection, setActiveSection] = useState(0)
    usePageMeta({
        title: "Resume",
        subtitle: "Information",
        icon: "/icons/ib.svg",
    })

    const scrollToSection = (index) => {
        sectionRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    // Auto-scroll when active section changes
    useEffect(() => {
        const activeBtn = navRefs.current[activeSection]
        const container = activeBtn?.parentElement

        if (!activeBtn || !container) return

        const isDesktop = window.innerWidth >= 768

        activeBtn.scrollIntoView({
            behavior: "smooth",
            block: isDesktop ? "nearest" : "nearest",
            inline: isDesktop ? "nearest" : "center"
        })

    }, [activeSection])

    // 
    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(Number(entry.target.dataset.index))
                    }
                })

            },
            {
                rootMargin: "-120px 0px -100% 0px",
                threshold: 0
            }
        )

        sectionRefs.current.forEach(section => {
            if (section) observer.observe(section)
        })

        return () => observer.disconnect()

    }, [])

    const posts = [
        {
            blocks: [
                {
                    type: "layout",
                    data: {
                        layout: [
                            { tag: "h3", class: '', html: "Ilan Brunfman" },
                            { tag: "h5", class: '', html: "Software Engineer (Frontend-Focused, Full-Stack Growth)" },
                            { tag: "h5", class: '', html: `React | Vue | TypeScript | Azure DevOps` },
                            { tag: "h5", class: '', html: `Olathe, Kansas (Open to Hybrid) `,  children: [
                                { tag: "a", class:'pr-0-5', attrs: { href: "https://www.linkedin.com/in/ilan-brunfman-358b20113/", target: "_blank" }, html: "LinkedIn" },
                                { tag: "a", class:'', attrs: { href: "https://github.com/ilanbrunfman", target: "_blank" }, html: "GitHub" },
                            ]},
                        ]
                    }
                },
            ]
        },
        {
            header:{
                title: 'Professional Summary'
            },
            blocks: [
                {
                    type: "text",
                    data: {
                        text: [ 'Software Engineer with 5+ years of experience building enterprise internal web applications with a strong focus on React, Vue (2 & 3), and TypeScript. Experienced in frontend architecture, API integration, and cross-team collaboration in Azure-based environments. Acted as technical lead on multiple projects, mentored offshore developers, and worked directly with stakeholders to deliver scalable business-critical tools. Expanding expertise toward full-stack development, cloud environments, and containerized deployments', ]
                    }
                },
            ]
        },
        {
            header: { 
                title: 'Technical Skills',   
            },
            blocks: [
                {
                    type: "tags",
                    data: {
                        subheader: 'Frontend:',
                        tags: [
                            { icon: { src: 'icon/react.svg',  width: 14, }, label: 'React' },
                            { icon: { src: 'icon/vue.svg', width: 14, },  label: 'Vue 2' },
                            { icon: { src: 'icon/vue.svg', width: 14, },  label: 'Vue 3' },
                            { icon: { src: 'images/icons/typescript-icon.svg', width: 14, },  label: 'TypeScript' },
                            { icon: { src: 'images/icons/javascript-icon.svg', width: 14, },  label: 'JavaScript' },
                            { icon: { src: 'images/icons/redux-icon.svg', width: 14, },  label: 'Redux' },
                            { icon: { src: 'icon/react.svg', width: 14, },  label: 'Context API' },
                            { icon: { src: 'images/icons/vuex-icon.svg', width: 14, },  label: 'Vuex' },
                            { icon: { src: 'images/icons/scss-icon.svg', width: 14, },  label: 'SCSS' },
                            { icon: { src: 'images/icons/sass-icon.svg', width: 14, },  label: 'Sass' },
                        ],
                    }
                },
                {
                    type: "tags",
                    data: {
                        subheader: 'Backend Collaboration:',
                        tags: [
                            { label: 'REST APIs' },
                            { label: 'frontend data modeling' },
                            { label: 'client-server communication' },
                        ],
                    }
                },
                {
                    type: "tags",
                    data: {
                        subheader: 'Cloud & DevOps:',
                        tags: [
                            { icon: { src: 'images/icons/azure-devops-icon.svg',  width: 14, }, label: 'Azure DevOps' },
                            { label: 'CI/CD' },
                            { icon: { src: 'images/icons/docker-icon.svg', width: 14, },  label: 'Docker' },
                            { icon: { src: 'images/icons/github-icon.svg', width: 14, },  label: 'Git' },
                        ],
                    }
                },
                {
                    type: "tags",
                    data: {
                        subheader: 'Architecture:',
                        tags: [
                            { label: 'Component libraries' },
                            { label: 'Modular design' },
                            { label: 'State management' },
                        ],
                    }
                },
                {
                    type: "tags",
                    data: {
                        subheader: 'Other:',
                        tags: [
                            { icon: { src: 'images/icons/wordpress-icon.svg', width: 14, }, label: 'WordPress' },
                            { label: 'Agile workflows' },
                            { label: 'Code reviews' },
                        ],
                    }
                },
            ]
        },
        {
            header:{
                title: 'Professional Experience'
            },
            blocks: [
                {
                    type: "cards",
                    data: {
                        cards: [  
                            {
                                image: { src: 'images/icons/eit.jpeg', alt: 'eit.jpeg', width: '64' },
                                title: 'Software Engineer - Enterprise Applications',
                                label: 'Eversana-Intouch (Salesforce/Veeva CLM Internal Applications',
                                durtion: '07/2020 – Present',
                                list: [
                                    `Owned architecture and development of enterprise web applications (7-26 page multi-screen systems) used company-wide by sales teams in client-facing and conference environments.`,
                                    `Established scalable frontend patterns primarily using React and Vue (2 & 3), implementing standardized folder structures and reusable component strategies to streamline development across repositories.`,
                                    `Architected and maintained shared UI component libraries (modals, navigation systems, tab frameworks, buttons, icons, cards), eliminating redundant implementations and improving long-term maintainability.`,
                                    `Engineered parallel Vue 2 and Vue 3 implementations while contributing to broader migration efforts toward React-based architecture, documenting component standards for team adoption.`,
                                    `Integrated RESTful services and implemented structured state management (Redux, Vuex, Pinia, Context API), resolving rendering inconsistencies and improving production stability.`,
                                    `Led full project lifecycle execution from stakeholder requirements through build, testing, and deployment within Azure DevOps CI/CD pipelines.`,
                                    `Mentored offshore engineers through structured code reviews, enforcing quality standards and promoting reusable architectural practices.`,
                                    `Represented frontend architecture decisions in cross-functional and client-facing discussions.`,
                                ]
                            },
                        ]
                    }
                },
            ]
        },
        {
            header:{
                title: 'Education'
            },
            blocks: [
                {
                    type: "cards",
                    data: {
                        cards: [  
                            {
                                image: { src: 'images/icons/ucm_logo.jpeg', alt: 'ucm_logo.jpeg', width: '64' },
                                title: 'Master of Science (MS), Computer Science',
                                label: 'University of Central Missouri',
                                durtion: '08/2017 - 05/2018'
                            },
                            {
                                image: { src: 'images/icons/lu_logo.jpeg', alt: 'lu_logo.jpeg', width: '64' },
                                title: 'Bachelor of Arts (BA), Graphic Design',
                                label: 'Lindenwood University',
                                durtion: '01/2013 - 05/2017'
                            },
                        ]
                    }
                },
            ]
        },
    ]

    return (
        <div className="resume">
            <div className="container">
                <div className="col-12 d-grid grid-md-3-9 gap-2 pt-4 pb-6">
                    <div className="col sidebar sidebar-sticky">
                        <div className="sidebar-container">
                            {posts.map((btn, index) => (
                                <button
                                    key={index}
                                    ref={(el) => (navRefs.current[index] = el)}
                                    className={`sidebar-btn ${activeSection === index ? "active" : ""}`}
                                    onClick={() => scrollToSection(index)}
                                >
                                    {btn.header?.title || "Intro"}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="col feeds">
                        { posts.map((post, index) => ( 
                            <motion.section 
                                key={index}
                                ref={(el) => (sectionRefs.current[index] = el)}
                                data-index={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true, margin: "-120px 0px -120px 0px"  }}
                            >
                                <Post post={post} />
                            </motion.section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResumePage