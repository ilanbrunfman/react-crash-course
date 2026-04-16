import { redirect } from 'react-router-dom'
import { authService } from '../authService'

export const requireUser = async () => {
    const user = authService.getUser()

    if (!user) throw redirect('/login')

    if (!['admin', 'customer'].includes(user.type)) {
        throw redirect('/')
    }

    return null
}