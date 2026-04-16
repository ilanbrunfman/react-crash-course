import { AuthProvider } from '@/auth/AuthContext'
import { ModalProvider } from '@/context/modal/ModalContext';
import { ToastProvider } from '@/context/toast/ToastContext';
import { RouterProvider } from 'react-router-dom'
import router from './Router'

const App = () => {
  return (
    <AuthProvider>
      <ModalProvider>
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </ModalProvider>
    </AuthProvider>
  )
}

export default App