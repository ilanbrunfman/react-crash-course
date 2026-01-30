import { useState } from 'react';
import Button from '@/components/button/Button';
import './UserModal.scss';

const DeleteUserModal = ({ user, removeUser, closeModal }) => {
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        await removeUser(user.id);
        closeModal(); // closes THIS modal

        setTimeout(() => {
            closeModal();      // closes UpdateUserModal underneath
        }, 150);
    };

    return (
        <>
            <div className="modal-header pt-0-5 pb-1 pr-0-5">
                <h2>Delete User</h2>
            </div>

            <div className="modal-body mb-1">
                <p className='pb-0-5'>
                    Are you sure you want to delete
                    <strong> {user.firstName} {user.lastName}</strong>?
                </p>
                <p className="danger-text">
                    This action cannot be undone.
                </p>
            </div>

            <div className="modal-actions">
                <Button
                    variant="danger"
                    onClick={handleDelete}
                    loading={loading}
                    fullWidth
                >
                    Yes, Delete User
                </Button>

                <Button
                    variant="ghost"
                    onClick={closeModal}
                    fullWidth
                >
                    Cancel
                </Button>
            </div>
        </>
    );
};

DeleteUserModal.modalConfig = {
    modalClass: 'modal-delete-user',
};

export default DeleteUserModal;
