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

    const openModal = (component, props = {}) => {
        const id = crypto.randomUUID();
        setModals(prev => [...prev, { id, component, props }]);
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
