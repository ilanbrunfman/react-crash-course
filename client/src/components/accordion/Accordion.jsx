import { useState } from "react"

import "./Accordion.scss"

const Accordion = ({
    items = [],
    allowMultiple = false,
    renderHeader,
    renderContent,
    className = ""
}) => {
    const [openIndexes, setOpenIndexes] = useState([])

    const toggle = (index) => {
        if (allowMultiple) {
            setOpenIndexes(prev =>
                prev.includes(index)
                    ? prev.filter(i => i !== index)
                    : [...prev, index]
            )
        } else {
            setOpenIndexes(prev =>
                prev[0] === index ? [] : [index]
            )
        }
    }

    return (
        <div className={`accordion ${className}`}>
            {items.map((item, index) => {
                const isOpen = openIndexes.includes(index)

                return (
                    <div
                        key={index}
                        className={`accordion-item ${isOpen ? "is-open" : ""}`}
                    >
                        <div onClick={() => toggle(index)}>
                            {renderHeader(item, isOpen)}
                        </div>

                        <div className={`accordion-body ${isOpen ? "open" : ""}`}>
                            {renderContent(item, isOpen)}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Accordion