import { useEffect } from "react"

const DEFAULT_TITLE = "My App"

export const usePageMeta = ({ title, subtitle, icon }) => {
    useEffect(() => {
        const finalTitle =
            title
                ? subtitle
                    ? `${title} | ${subtitle}`
                    : `${title} | ${DEFAULT_TITLE}`
                : DEFAULT_TITLE

        document.title = finalTitle

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