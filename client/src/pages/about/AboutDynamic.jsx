import { useParams } from "react-router-dom"
import { usePageMeta } from "@/hooks/usePageMeta"
import { aboutPages } from "./uiData"

const AboutDynamic = () => {
    const { slug } = useParams()

    const page = aboutPages.find(p => p.slug === slug)

    // Use title from config
    usePageMeta({
        title: page.title || page.label,
        icon: "/icons/react.svg",
    })

    // Handle 404 early
    if (!page) {
        usePageMeta({ title: "Not Found", icon: "/icons/react.svg", })
        return <p>Page not found.</p>
    }

    

    const Component = page.component

    return <Component />
}

export default AboutDynamic
