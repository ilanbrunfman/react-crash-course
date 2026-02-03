import { motion } from "framer-motion"

const variants = {
    enter: (direction) => ({
        x: direction > 0 ? 20 : -20,
        opacity: 0,
        position: "absolute",
        width: "100%",
    }),
    center: {
        x: 0,
        opacity: 1,
        position: "relative",
    },
    exit: (direction) => ({
        x: direction > 0 ? -20 : 20,
        opacity: 0,
        position: "absolute",
        width: "100%",
    }),
}

const TabPanel = ({ children, direction }) => {
    return (
        <motion.div
            className="tab-panel"
            variants={variants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}

export default TabPanel
