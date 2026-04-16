import { redirect } from 'react-router-dom'
import { authService } from '../authService'

export const requireAuth = async ({ request }) => {
    const user = authService.getUser()

    if (!user) {
        const url = new URL(request.url)

        throw redirect(
            `/login?redirectTo=${encodeURIComponent(
                url.pathname + url.search
            )}`
        )
    }

    return null
}