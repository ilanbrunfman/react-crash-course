import { useState, useMemo } from "react"
import imageMap from "@/utils/imageMap"
import "./Image.scss"

const Image = ({
    src,        // direct URL (API or public)
    file,       // local asset filename
    alt,
    width,
    ratio,
    fit = "cover",
    rounded = false,
    circle = false,
    lazy = true,
    fallback = "/images/fallback.png",
    className = "",
}) => {
    const [error, setError] = useState(false)

    // Determine final image source
    const finalSrc = useMemo(() => {
        if (src) return src                 // external / API image
        if (file && imageMap[file]) return imageMap[file]  // local bundled image
        return fallback
    }, [src, file])

    const classes = [
        "ui-image",
        ratio && "has-ratio",
        rounded && "is-rounded",
        circle && "is-circle",
        `fit-${fit}`,
        className,
    ]
        .filter(Boolean)
        .join(" ")

    return (
        <div className={classes} style={ratio ? { "--ratio": ratio, width } : { width }} >
            <img
                src={error ? fallback : finalSrc}
                alt={alt}
                width={width}
                loading={lazy ? "lazy" : "eager"}
                onError={() => setError(true)}
            />
        </div>

    )
}

export default Image
