// src/auth/authService.js
import usersData from '@/database/database.json'

const TOKEN_KEY = 'token'
const USER_KEY = 'user'

export const authService = {
    login(email, password) {
        const user = usersData.users.find(
            (u) => u.email === email && u.password === password
        )

        if (!user) return null

        localStorage.setItem(TOKEN_KEY, user.id)
        localStorage.setItem(USER_KEY, JSON.stringify(user))

        return user
    },

    logout() {
        localStorage.removeItem(TOKEN_KEY)
        localStorage.removeItem(USER_KEY)
    },

    getUser() {
        const user = localStorage.getItem(USER_KEY)
        return user ? JSON.parse(user) : null
    },

    isAuthenticated() {
        return !!localStorage.getItem(TOKEN_KEY)
    },
}