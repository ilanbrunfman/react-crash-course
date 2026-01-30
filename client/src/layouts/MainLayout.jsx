import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import { ModalProvider } from '@/context/modal/ModalContext';
import { ToastProvider } from '@/context/toast/ToastContext';
import ModalHost from '@/context/modal/ModalHost';

const MainLayout = () => {
    return (
        <>
        <ModalProvider>
        <ToastProvider>
            <Navbar />
            <Outlet />
            <ModalHost />
        </ToastProvider>
        </ModalProvider>
        </>
    )
}

export default MainLayout