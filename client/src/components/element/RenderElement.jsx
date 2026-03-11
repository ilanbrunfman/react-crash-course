import React from "react"

const RenderElement = ({ node }) => {

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

    // convert events (click → onClick)
    Object.keys(on).forEach((event) => {
        const reactEvent =
            "on" + event.charAt(0).toUpperCase() + event.slice(1)
        props[reactEvent] = on[event]
    })

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
                <RenderElement key={index} node={child} />
            )
        })
    }

    return React.createElement(tag, props, childNodes)
}

export default RenderElement