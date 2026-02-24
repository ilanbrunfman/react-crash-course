import { redirect } from 'react-router-dom'

export const requireAuth = async () => {
    // Replace this with real auth logic
    const token = localStorage.getItem('token')

    if (!token) {
        throw redirect('/auto/login')
    }

    return null
}