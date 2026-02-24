import { motion } from 'framer-motion';
import { usePageMeta } from "@/hooks/usePageMeta";
import './NotFoundPage.scss'

const NotFoundPage = () => {

    usePageMeta({
        title: "Page not found",
        icon: "/icons/sun.png",
    })

    return (
        <div className="not-found">
            <div className="container ">
                <div className="row">
                    <div className="col-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            <h1 className="align-center">404 Page not found</h1>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NotFoundPage