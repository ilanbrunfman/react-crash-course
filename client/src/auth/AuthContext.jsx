// src/auth/AuthContext.jsx
import { createContext, useContext, useState } from 'react'
import { authService } from './authService'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(authService.getUser())

    const login = (email, password) => {
        const user = authService.login(email, password)
        if (user) setUser(user)
        return user
    }

    const logout = () => {
        authService.logout()  // clear localStorage
        setUser(null)         // clear context state
    }

    const isAuthenticated = !!user
    const isGuest = !user
    const isAdmin = user?.type === 'admin'
    const isCustomer = user?.type === 'customer'

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated,
                isAdmin,
                isCustomer,
                isGuest,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)