import { isaPages } from "../ISA_Data"

export { isaPages }

export const getFirstISARoute = () => {
    for (const section of isaPages) {
        if (Array.isArray(section.children) && section.children.length > 0) {
            return `/isa/${section.slug}/${section.children[0].slug}`
        }

        if (section.component) {
            return `/isa/${section.slug}`
        }
    }

    return null
}

export const getFirstSectionPage = (sectionSlug) => {
    const section = isaPages.find(s => s.slug === sectionSlug)

    if (!section) return null

    if (Array.isArray(section.children) && section.children.length > 0) {
        return `/isa/${section.slug}/${section.children[0].slug}`
    }

    if (section.component) {
        return `/isa/${section.slug}`
    }

    return null
}