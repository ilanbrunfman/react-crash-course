import { motion } from 'framer-motion';
import { usePageMeta } from "@/hooks/usePageMeta";
import { useNavigate } from 'react-router-dom'

import Button from '@/components/button/Button'
import './NotFoundPage.scss'

const NotFoundPage = () => {

    const navigate = useNavigate()

    usePageMeta({
        title: "Page not found",
        icon: "/icons/sun.png",
    })

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="not-found">
            <div className="row">
                <div className="col-12 pt-1 pl-1">
                    <Button
                        variant="icon"
                        size="small"
                        icon={{ name: 'IconArrowLeft', position: 'center', size: 16 }}
                        onClick={handleBack}
                    />
                </div>
            </div>
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
            <div className="row">
                <div className="col-12"></div>
            </div>
        </div>
    )
}
export default NotFoundPage