import { useModal } from './modalContext';
import Modal from '@/components/modal/Modal';
import { AnimatePresence } from 'framer-motion';

const ModalWrapper = ({ component: ModalComponent, props, config, closeModal, zIndex }) => {

    // const config = {
    //     ...(Component.modalConfig || {}),
    //     ...props
    // };

    return (
        <Modal 
            isOpen 
            onClose={closeModal} 
            config={config}
            style={{ zIndex }}
        >
            <ModalComponent {...props} closeModal={closeModal} />
        </Modal>
    );
};

const ModalHost = () => {
    const { modals, closeModal } = useModal();

    return (
        <AnimatePresence >
            {modals.map((modal, index) => (
                <ModalWrapper
                    key={modal.id}
                    component={modal.component}
                    props={modal.props}
                    config={modal.config}
                    closeModal={closeModal}
                    zIndex={1000 + index} // stack visually
                />
            ))}
        </AnimatePresence>
    );
};

export default ModalHost;
