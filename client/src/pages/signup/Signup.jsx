import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { usePageMeta } from "@/hooks/usePageMeta"
import { useUsers } from '@/hooks/useUsers'

import Button from '@/components/button/Button'
import '@/pages/login/Login.scss'

const SignupPage = () => {
    const navigate = useNavigate()
    const { users, loading: usersLoading, error: usersError, addUser } = useUsers()

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        type: 'guest',
    })

    const [localError, setLocalError] = useState('')
    const [loading, setLoading] = useState(false)

    usePageMeta({
        title: "Sign Up",
        icon: "/icons/ib.svg",
    })

    // Auto hide local errors after 3 seconds
    useEffect(() => {
        if (!localError) return
        const timer = setTimeout(() => setLocalError(''), 3000)
        return () => clearTimeout(timer)
    }, [localError])

    const handleChange = (e) => {
        setForm(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
        }))
    }

    const handleBack = () => {
        navigate(-1)
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        setLocalError('')
        setLoading(true)

        const { firstName, lastName, email, password } = form

        if (!firstName || !lastName || !email || !password) {
        setLocalError('All fields are required')
        setLoading(false)
        return
        }

        try {
        const newUser = await addUser(form) // hook handles duplicates
        // Auto login
        localStorage.setItem('token', newUser.id)
        localStorage.setItem('user', JSON.stringify(newUser))
        navigate('/', { replace: true })
        } catch (err) {
        setLocalError(err.message || 'Failed to create account')
        } finally {
        setLoading(false)
        }
  }

    return (
        <div className="login">
            <div className="login-header">
                <div className="row">
                    <div className="col-12 pt-1 pl-1">
                        <Button
                            variant="icon"
                            size="small"
                            icon={{ name: 'IconArrowLeft', position: 'center', size: 16 }}
                            onClick={handleBack}
                        />
                    </div>
                </div>
            </div>
            <div className="login-body">
                <div className="container">

                <motion.div
                    className="wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >

                    <div className="wrapper-container mb-1">
                        <div className="row">
                            <div className="col-12 pt-2 px-2">
                                <h2 className="fw-bold text-left mb-2">Create Account</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 px-2 pb-2">

                                <form onSubmit={handleSignup} className="login-form">

                                    <div className="login-form-group mb-1">
                                        <label>First Name</label>
                                        <input
                                            name="firstName"
                                            value={form.firstName}
                                            onChange={handleChange}
                                            className="login-form-input"
                                        />
                                    </div>

                                    <div className="login-form-group mb-1">
                                        <label>Last Name</label>
                                        <input
                                            name="lastName"
                                            value={form.lastName}
                                            onChange={handleChange}
                                            className="login-form-input"
                                        />
                                    </div>

                                    <div className="login-form-group mb-1">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            className="login-form-input"
                                        />
                                    </div>

                                    <div className="login-form-group mb-1">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={form.password}
                                            onChange={handleChange}
                                            className="login-form-input mb-0-5"
                                        />
                                        {(localError || usersError) && (
                                            <p className="login-form-error">
                                            {localError || usersError}
                                            </p>
                                        )}
                                    </div>

                                    <div className="login-form-group">
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            size="lg"
                                            disabled={loading || usersLoading}
                                            className="login-form-submit-button"
                                        >
                                            {loading ? 'Creating...' : 'Sign Up'}
                                        </Button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <p className="text-center">
                                Already have an account?{" "}
                                <span className="login-nav-link text-underline" onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}
                                >Log in</span>
                            </p>
                        </div>
                    </div>

                </motion.div>

                </div>
            </div>
        </div>
    )
}

export default SignupPage