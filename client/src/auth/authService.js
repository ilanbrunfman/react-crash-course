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

    isGuest() {
        return !this.isAuthenticated()
    },

    isAdmin() {
        const user = this.getUser()
        return user?.type === 'admin'
    },

    isCustomer() {
        const user = this.getUser()
        return user?.type === 'customer'
    },

    hasRole(role) {
        const user = this.getUser()
        return user?.type === role
    },

    hasAnyRole(roles = []) {
        const user = this.getUser()
        return roles.includes(user?.type)
    }
}