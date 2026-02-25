import { AuthProvider } from '@/auth/AuthContext'
import { RouterProvider } from 'react-router-dom'
import router from './Router'

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App