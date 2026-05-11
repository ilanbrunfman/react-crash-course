import { Navigate, useParams } from "react-router-dom"
import { usePageMeta } from "@/hooks/usePageMeta"
import { db } from "./db"

const Dynamic = () => {
    const { slug } = useParams()

    const page = db.find(p => p.slug === slug)

    usePageMeta({
        title: page?.title || page?.label || "Not Found",
        icon: "/icons/react.svg",
    })

    if (!page || !page.component) {
        return <Navigate to="/page-not-found" replace />
    }

    const Component = page.component

    return <Component />
}

export default Dynamic