import { useEffect } from "react"

const DEFAULT_TITLE = "My App"

export const usePageMeta = ({
    title,
    subtitle,
    icon,
    }) => {
    useEffect(() => {
        // Title
        if (title) {
            document.title = subtitle
                ? `${title} | ${subtitle}`
                : `${title} | ${DEFAULT_TITLE}`
            } else {
            document.title = DEFAULT_TITLE
        }

        // Favicon
        if (icon) {
            let link = document.querySelector("link[rel~='icon']")

            if (!link) {
                link = document.createElement("link")
                link.rel = "icon"
                document.head.appendChild(link)
            }

            link.href = icon
        }

    }, [title, subtitle, icon]) 
}
