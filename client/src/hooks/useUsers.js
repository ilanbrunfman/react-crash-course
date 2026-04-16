import { useEffect, useState } from 'react';
import {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
} from '../services/userService';

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const loadUsers = async () => {
        try {
            setLoading(true);
            const data = await getUsers();
            setUsers(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        loadUsers();
    }, []);
    
    const addUser = async (user) => {
        const created = await createUser(user);
        setUsers(prev => [...prev, created]);
        return created
    };
    
    const removeUser = async (id) => {
        await deleteUser(id);
        setUsers(prev => prev.filter(u => u.id !== id));
    };
    
    const editUser = async (id, updatedUser) => {
        const updated = await updateUser(id, updatedUser);
        setUsers(prev => prev.map(u => (u.id === id ? updated : u)));
    };
    
    return {
        users,
        loading,
        error,
        addUser,
        removeUser,
        editUser,
        reload: loadUsers,
    };
};
