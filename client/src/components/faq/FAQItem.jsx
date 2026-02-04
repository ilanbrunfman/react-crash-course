import { motion, AnimatePresence } from "framer-motion"
import Icon from '@/components/icons/Icon';

const FAQItem = ({ question, children, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
            <button className="faq-question" onClick={onClick}>
                {question}
                <Icon
                    name={isOpen ? 'IconMinus' : 'IconPlus'}
                    size="20"
                    // color="red"
                    className="icon"
                />
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="faq-answer-inner">
                        {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default FAQItem
