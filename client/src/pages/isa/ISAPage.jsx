import { useEffect } from "react"
import { useNavigate, useMatch, Outlet, useParams } from "react-router-dom"
import RouterLink from "@/components/RouterLink/RouterLink"
// import { isaPages } from "./ISA_Data"
import { isaPages, getFirstISARoute } from "./helpers/isaHelpers"

const ISAPage = () => {

    const navigate = useNavigate()
    const isIndex = useMatch("/isa")
    const { section } = useParams()

    // Redirect /isa → first valid route
    useEffect(() => {
        if (!isIndex) return
        const path = getFirstISARoute()
        if (path) { navigate(path, { replace: true }) }
    }, [isIndex, navigate])

    // Find current section for page-level navbar
    const currentSection = isaPages.find((s) => s.slug === section)
    
    return (
        <div className="isa">
            <div className="container">
                <div className="row">
                    <div className="col-12 pt-2 mb-2">
                        <h1>ISA</h1>
                    </div>
                    <div className="col-12 d-flex gap-2 mb-2">
                        {isaPages.map((section) => ( 
                            <RouterLink 
                                key={section.slug}
                                to={`/isa/${section.slug}`} 
                                className={({ isActive }) =>isActive ? "sidebar-link active" : "sidebar-link"}
                            >
                                {section.label}
                            </RouterLink>
                        ))}
                    </div>

                    {currentSection?.children?.length > 1 && (
                        <div className="col-12 d-flex gap-2 mb-2">
                            {currentSection.children.map((page) => (
                                <RouterLink
                                    key={page.slug}
                                    to={`/isa/${currentSection.slug}/${page.slug}`}
                                    className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                                >
                                    {page.label}
                                </RouterLink>
                            ))}
                        </div>
                    )}

                </div>

                <Outlet />
            </div>
        </div>
    )
}

export default ISAPage;