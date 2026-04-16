import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used inside ModalProvider');
    }
    return context;
};

export const ModalProvider = ({ children }) => {
    const [modals, setModals] = useState([]);

    const openModal = (component, props = {}, configOverrides = {}) => {
        const id = crypto.randomUUID();
        const mergedConfig = { ...(component.modalConfig || {}), ...configOverrides };
        setModals(prev => [...prev, { id, component, props, config: mergedConfig }]);
    };

    const closeModal = () => {
        setModals(prev => prev.slice(0, -1)); // pop
    };

    const closeAllModals = () => setModals([]);

    return (
        <ModalContext.Provider value={{ openModal, closeModal, closeAllModals, modals }}>
            {children}
        </ModalContext.Provider>
    );
};
