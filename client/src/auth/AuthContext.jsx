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

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)