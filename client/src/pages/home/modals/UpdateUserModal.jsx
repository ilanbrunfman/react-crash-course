import { useState } from 'react';
import { useModal } from '@/context/modal/ModalContext';
import { useToast } from '@/context/toast/ToastContext';
import './UserModal.scss';

import Button from '@/components/button/Button';
import DeleteUserModal from './DeleteUserModal';

const UpdateUserModal = ({ user, editUser, removeUser, closeModal }) => {

    const { openModal } = useModal();
    const { addToast } = useToast();

    const [form, setForm] = useState({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        password: '', // empty = keep old
        type: user.type || 'guest',
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
            if (!form.firstName || !form.lastName) {
                setError('First name and last name are required');
                setLoading(false);
                return;
            }

            const updatedData = {
                ...user,
                ...form,
                password: form.password ? form.password : user.password, // keep old if empty
            };

            await editUser(user.id, updatedData);
            addToast({ message: 'User Updated successfully!', type: 'success', duration: 2500 })
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
                <h2>Update User</h2>
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
                        <label>New Password</label>
                        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Leave blank to keep current" />
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

                    <div className="modal-divider" />

                    <div>
                        <Button variant="danger" size="md" onClick={() => openModal(DeleteUserModal, { user, removeUser })}>
                            Delete User
                        </Button>
                    </div>

                    <div className="modal-actions pt-1 pb-0-5">
                        <Button type="submit" loading={loading} variant="primary">
                            Save Changes
                        </Button>
                        <Button variant="ghost" onClick={closeModal}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

UpdateUserModal.modalConfig = {
    modalClass: 'modal-update-user',
    // variant: 'fade',
    // duration: 0.01,
};

export default UpdateUserModal;
