import { api } from './api'; // http://localhost:4040

// Fetc Users
export const getUsers = () => api('/users');

// Create User
export const createUser = (user) => {
    return api('/users', {
        method: 'POST',
        body: JSON.stringify(user),
    });
};

// Delete User
export const deleteUser = (id) => {
    return api(`/users/${id}`, { method: 'DELETE' });
};

// Update User
export const updateUser = (id, user) => {
    return api(`/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
    });
};