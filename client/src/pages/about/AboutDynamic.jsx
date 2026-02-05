import { useParams } from "react-router-dom"
import { usePageMeta } from "@/hooks/usePageMeta"
import { aboutPages } from "./uiData"

const AboutDynamic = () => {
    const { slug } = useParams()

    const page = aboutPages.find(p => p.slug === slug)

    // Handle 404 early
    if (!page) {
        usePageMeta({ title: "Not Found" })
        return <p>Page not found.</p>
    }

    // Use title from config
    usePageMeta({
        title: page.title || page.label,
    })

    const Component = page.component

    return <Component />
}

export default AboutDynamic
