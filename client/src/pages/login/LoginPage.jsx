import { motion } from 'framer-motion';
import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { usePageMeta } from "@/hooks/usePageMeta"
import { useAuth } from '@/auth/AuthContext'

import Button from '@/components/button/Button'
import usersData from '@/database/database.json'
import './Login.scss'

const LoginPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { login } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    usePageMeta({
        title: "Login",
        icon: "/icons/ib.svg",
    })

    // ✅ Auto hide error after 3 seconds
    useEffect(() => {
        if (!error) return

        const timer = setTimeout(() => {
        setError('')
        }, 3000)

        return () => clearTimeout(timer)
    }, [error])

    const handleBack = () => {
        navigate(-1)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        const user = login(email, password)

        if (!user) {
            setError('Invalid email or password')
            return
        }

        const redirectTo =
            new URLSearchParams(location.search).get('redirectTo') || '/'

        navigate(redirectTo, { replace: true })
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
                    <motion.div className="wrapper"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                    >

                        <div className="wrapper-container mb-1">
                            <div className="row">
                                <div className="col-12 pt-2 px-2">
                                    <h2 className="fw-bold text-left mb-2">Login page</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 px-2 pb-2">
                                    <form onSubmit={handleLogin} className="login-form">
                                        <div className="login-form-group mb-1">
                                            <label className="login-form-label">Username:</label>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                id="email"
                                                value={email}
                                                className='login-form-input'
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="login-form-group mb-1">
                                            <label className="login-form-label">Password:</label>
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                id="password"
                                                value={password}
                                                className='login-form-input mb-0-5'
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            {error && <p className="login-form-error">{error}</p> }
                                        </div>

                                        <div className="login-form-group">
                                            <Button 
                                                type="submit"  
                                                variant="primary" 
                                                size="lg"
                                                className="login-form-submit-button"
                                            >Log in</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <p className="text-center">Don't have an account? <NavLink to='/signup' className="login-nav-link text-underline">Sign up</NavLink></p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage