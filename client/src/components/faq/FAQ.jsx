import Accordion from "@/components/Accordion/Accordion"
import Icon from "@/components/icons/Icon"
import "./FAQ.scss"

const FAQ = ({ items = [], allowMultiple = false }) => {
    return (
        <Accordion
            items={items}
            allowMultiple={allowMultiple}
            className="faq"
            renderHeader={(item, isOpen) => (
                <button className="faq-question">
                    {item.question}
                    <Icon
                        name={isOpen ? 'IconMinus' : 'IconPlus'}
                        size="20"
                    />
                </button>
            )}
            renderContent={(item) => (
                <div className="faq-answer-inner">
                    {item.answer}
                </div>
            )}
        />
    )
}

export default FAQ