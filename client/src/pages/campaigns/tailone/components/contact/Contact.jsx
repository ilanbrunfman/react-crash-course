import { useState } from 'react'
import './Contact.scss' 

const INITIAL_FORM = {
    name: '',
    email: '',
    message: '',
}

const Contact = () => {
    const [form, setForm] = useState(INITIAL_FORM)

    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }))

        // remove error while typing
        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }))
    }

    const validate = () => {
        const newErrors = {}

        if (!form.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!form.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
        ) {
            newErrors.email = 'Invalid email address'
        }

        if (!form.message.trim()) {
            newErrors.message = 'Message is required'
        }

        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const validationErrors = validate()

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        try {
            setLoading(true)

            // fake request
            await new Promise((resolve) =>
                setTimeout(resolve, 1200)
            )

            setSuccess(true)
            setForm(INITIAL_FORM)

            setTimeout(() => {
                setSuccess(false)
            }, 4000)

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="contact-section">
            <div className="container">

                <div className="contact-wrapper">

                    {/* LEFT */}
                    <div className="contact-content">

                        <span className="section-badge">
                            Contact Us
                        </span>

                        <h2 className="section-title">
                            Let’s Build Something Great Together
                        </h2>

                        <p className="section-subtitle">
                            Have a project in mind or want to collaborate?
                            Reach out and let’s create something amazing.
                        </p>

                        <div className="contact-info">

                            <div className="contact-info-item">
                                <span>Email</span>
                                <a href="mailto:hello@tailone.com">
                                    hello@tailone.com
                                </a>
                            </div>

                            <div className="contact-info-item">
                                <span>Phone</span>
                                <a href="tel:+15551234567">
                                    +1 (555) 123-4567
                                </a>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="contact-form-card">

                        <form onSubmit={handleSubmit} noValidate>

                            <div className="form-group">
                                <label htmlFor="name">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                />

                                {errors.name && (
                                    <p className="form-error">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={form.email}
                                    onChange={handleChange}
                                />

                                {errors.email && (
                                    <p className="form-error">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    placeholder="Tell us about your project"
                                    value={form.message}
                                    onChange={handleChange}
                                />

                                {errors.message && (
                                    <p className="form-error">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={loading}
                            >
                                {loading
                                    ? 'Sending...'
                                    : 'Send Message'}
                            </button>

                            {success && (
                                <div className="form-success">
                                    Your message has been sent successfully.
                                </div>
                            )}

                        </form>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact