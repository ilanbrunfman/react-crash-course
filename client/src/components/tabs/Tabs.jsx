import { useState, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import TabPanel from "./TabPanel"
import "./Tabs.scss"

const Tabs = ({ tabs = [], defaultIndex = 0 }) => {
    const [active, setActive] = useState(defaultIndex)
    const prevIndex = useRef(defaultIndex)

    const handleChange = (index) => {
        prevIndex.current = active
        setActive(index)
    }

    const direction = active > prevIndex.current ? 1 : -1

    return (
        <div className="tabs">
            <div className="tabs-header">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-btn ${active === index ? "is-active" : ""}`}
                        onClick={() => handleChange(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="tabs-body">
                <AnimatePresence mode="wait" custom={direction}>
                    <TabPanel key={active} direction={direction}>
                        {tabs[active]?.content}
                    </TabPanel>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Tabs
