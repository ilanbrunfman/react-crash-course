import { useState } from "react"
import FAQItem from "./FAQItem"
import "./FAQ.scss"

const FAQ = ({ items = [], allowMultiple = false }) => {
    const [openIndexes, setOpenIndexes] = useState([])

    const toggle = (index) => {
        if (allowMultiple) {
            setOpenIndexes(prev =>
                prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
            )
        } else {
            setOpenIndexes(prev => (prev[0] === index ? [] : [index]))
        }
    }

    return (
        <div className="faq">
            {items.map((item, index) => (
                <FAQItem
                    key={index}
                    question={item.question}
                    isOpen={openIndexes.includes(index)}
                    onClick={() => toggle(index)}
                >
                    {item.answer}
                </FAQItem>
            ))}
        </div>
    )
}

export default FAQ