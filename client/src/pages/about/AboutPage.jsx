import { useEffect } from "react"
import { useNavigate, useMatch, Outlet } from "react-router-dom"
import { aboutPages } from "./uiData"
import "./About.scss"
import Sidebar from "./sidebar/Sidebar"

const AboutPage = () => {

    const navigate = useNavigate()
    const isIndex = useMatch("/about")
    
    useEffect(() => {
        if (isIndex && aboutPages.length) {
            const sortedAboutPages = [...aboutPages].sort((a, b) => a.label.localeCompare(b.label))
            navigate(sortedAboutPages[0].slug, { replace: true })
        }
    }, [isIndex, navigate])

    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-12 pt-2 mb-2">
                        <h1>User Interface Components</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-grid grid-md-3-9 gap-2">
                        <div className="col">
                            <Sidebar />
                        </div>
                        <div className="col">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutPage