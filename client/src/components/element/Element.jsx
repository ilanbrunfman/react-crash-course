import React from "react"

const Element = ({ node }) => {

    if (!node) return null

    const {
        tag = "div",
        class: className,
        style,
        html,
        children,
        attrs = {},
        on = {},
        ...rest
    } = node

    const props = {
        className,
        style,
        ...attrs,
        ...rest
    }

    // Resolve Vite assets if src starts with "@/..."
    if (tag === "img" && props.src?.startsWith("@/")) {
        const path = props.src.replace("@/", "/src/")
        props.src = new URL(path, import.meta.url).href
    }

    // convert events (click → onClick)
    Object.keys(on).forEach((event) => {
        const reactEvent =
            "on" + event.charAt(0).toUpperCase() + event.slice(1)
        props[reactEvent] = on[event]
    })

    // VOID ELEMENTS (must not receive children)
    const voidTags = ["img", "input", "br", "hr", "meta", "link"]

    if (voidTags.includes(tag)) {
        return React.createElement(tag, props)
    }

    const childNodes = []

    if (html) {
        const containsHTML = /<\/?[a-z][\s\S]*>/i.test(html)

        if (containsHTML) {
            props.dangerouslySetInnerHTML = { __html: html }
        } else {
            childNodes.push(html)
        }
    }

    if (children?.length) {
        children.forEach((child, index) => {
            childNodes.push(
                <Element key={index} node={child} />
            )
        })
    }

    return React.createElement(tag, props, childNodes)
}

export default Element