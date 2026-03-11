import { redirect } from 'react-router-dom'
import { authService } from '../authService'

export const requireAdmin = async ({ request }) => {
    const user = authService.getUser()

    if (!user) {
        const url = new URL(request.url)

        throw redirect(
            `/login?redirectTo=${encodeURIComponent(
                url.pathname + url.search
            )}`
        )
    }

    if (user.type !== 'admin') {
        throw redirect('/about') // '/not-authorized'
    }

    return null
}