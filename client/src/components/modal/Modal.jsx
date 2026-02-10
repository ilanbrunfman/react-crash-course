import { motion } from 'framer-motion';
import {
    backdropAnimation,
    modalAnimations,
    modalDurations,
    modalSprings,
} from './modalAnimations'

import './Modal.scss'

const Modal = ({ children, onClose, config }) => {

    const animation = modalAnimations[config.variant] || modalAnimations["slide-up"]
    const duration = config.duration || modalDurations.normal
    const transition = config.spring ? modalSprings[config.spring] : { duration } 

    return (
        <motion.div
            className={`modal ${config.modalClass || ''}`}
            onClick={onClose}
            variants={backdropAnimation}
            initial="initial"
            animate="animate"
            exit="exit" 
            transition={{ duration: duration * 0.8}}
        >
            <motion.div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                variants={animation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transition}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default Modal;
