import { useState } from 'react';
import { useToast } from '@/context/toast/ToastContext';
import './UserModal.scss'

import Button from '@/components/button/Button';


const AddUserModal = ({ addUser, closeModal }) => {
    
    const { addToast } = useToast();

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        type: 'guest',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (!form.firstName || !form.lastName || !form.password) {
                setError('First name, last name and password are required');
                setLoading(false);
                return;
            }

            await addUser(form); 
            addToast({ message: 'User added successfully!', type: 'success', duration: 2500 })
            closeModal();       
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <>
            <div className="modal-header col-12 d-flex align-items-center justify-between pt-0-5 pb-2 pr-0-5">
                <h2>Add User</h2>
                <button className="modal-close" onClick={closeModal}>✕</button>
            </div>
            <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input name="firstName" value={form.firstName} onChange={handleChange} />
                    </div>

                    <div>
                        <label>Last Name</label>
                        <input name="lastName" value={form.lastName} onChange={handleChange} />
                    </div>

                    <div>
                        <label>Email</label>
                        <input name="email" value={form.email} onChange={handleChange} />
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={form.password} onChange={handleChange} />
                    </div>

                    <div>
                        <label>Type</label>
                        <select name="type" value={form.type} onChange={handleChange}>
                        <option value="admin">Admin</option>
                        <option value="guest">Guest</option>
                        <option value="customer">Customer</option>
                        </select>
                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <div className="modal-actions pt-1 pb-0-5">
                        <Button 
                            type="submit" 
                            disabled={loading} 
                            variant="primary">{loading ? 'Adding...' : 'Add User'}</Button>
                        <Button 
                            variant="ghost" 
                            onClick={closeModal}>Cancel</Button>
                    </div>

                </form>
            </div>
            
        </>
    )
};

// Modal Config
AddUserModal.modalConfig = {
    modalClass: 'modal-add-user',
    variant: 'slide-up',
    spring: 'snappy',
    // duration: 2.0,
};

export default AddUserModal