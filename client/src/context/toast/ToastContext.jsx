import { createContext, useContext, useState, useCallback } from 'react';
import ToastHost from './ToastHost';

const ToastContext = createContext();

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used inside ToastProvider');
    return context;
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback(({ message, type = 'info', duration = 3000 }) => {
        const id = crypto.randomUUID();
        setToasts(prev => [...prev, { id, message, type, duration }]);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
            {children}
            <ToastHost />
        </ToastContext.Provider>
    );
};
