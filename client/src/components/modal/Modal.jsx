import { motion } from 'framer-motion';
import './Modal.scss'

const Modal = ({ children, onClose, modalClass }) => {
    return (
        <motion.div
            className={`modal ${modalClass || ''}`}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}  
        >
            <motion.div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                initial={{ y: 40, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 40, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default Modal;
