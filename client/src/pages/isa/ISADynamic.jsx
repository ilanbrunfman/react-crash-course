import { useParams } from "react-router-dom"
// import { usePageMeta } from "@/hooks/usePageMeta"
import { isaPages } from "./ISA_Data"

const ISADynamic = () => {
    const { section, page } = useParams()

    const group = isaPages.find(g => g.slug === section)

    const item = group?.children?.find(p => p.slug === page)

    if (!item) return <p>Page not found</p>

    const Component = item.component

    return <Component />
}

export default ISADynamic;