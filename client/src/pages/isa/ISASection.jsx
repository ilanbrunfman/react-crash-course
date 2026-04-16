import { useEffect } from "react"
import { useParams, useNavigate, Outlet } from "react-router-dom"
import { isaPages } from "./ISA_Data"

const ISASection = () => {

    const { section, page } = useParams()
    const navigate = useNavigate()

    const group = isaPages.find(g => g.slug === section)

    useEffect(() => {

        if (!group) return

        // redirect if section has children but page is missing
        if ( !page && Array.isArray(group.children) && group.children.length > 0 ) {
            navigate(group.children[0].slug, { replace: true })
        }

    }, [group, page, navigate])

    if (!group) {
        return <p>Section not found</p>
    }

    // If the section has its own component (like eligibility)
    if (group.component) {
        const Component = group.component
        return <Component />
    }

    // Otherwise render nested pages (contracts/templates)
    return <Outlet />
}

export default ISASection