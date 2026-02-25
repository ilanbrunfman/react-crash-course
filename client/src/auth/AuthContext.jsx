// src/auth/AuthContext.jsx
import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authService } from './authService'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(authService.getUser())
    const navigate = useNavigate()

    const login = (email, password) => {
        const user = authService.login(email, password)
        if (user) setUser(user)
        return user
    }

    const logout = () => {
        authService.logout()  // clear localStorage
        setUser(null)         // clear context state

        // optional: redirect immediately after logout
        navigate('/login', { replace: true })
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