import { useEffect } from 'react';
import { useToast } from './ToastContext';
import { AnimatePresence, motion } from 'framer-motion';
import './toast.scss';

const ToastHost = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="toast-container">
      <AnimatePresence initial={false}>
        {toasts.map(toast => (
          <Toast key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const Toast = ({ toast, onClose }) => {
  const { message, type, duration = 3000 } = toast;

  // Auto close after duration
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.25 }}
      className={`toast toast-${type}`}
    >
      <div className="toast-message">{message}</div>
      <button className="toast-close" onClick={onClose}>✕</button>
      <div
        className="toast-progress"
        style={{ animationDuration: `${duration}ms` }}
      />
    </motion.div>
  );
};

export default ToastHost;
