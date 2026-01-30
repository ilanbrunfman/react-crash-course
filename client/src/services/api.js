const BASE_URL = '/api'

export const api = async (endpoint, options = {}) => {
    const token = localStorage.getItem('token'); // future-proofing

    const config = {
        headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
        },
        ...options,
    };

    const res = await fetch(`${BASE_URL}${endpoint}`, config);

    if (!res.ok) {
        const message = await res.text();
        throw new Error(message || 'API error');
    }

    return res.status === 204 ? null : res.json();
};