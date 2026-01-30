import { useUsers } from '@/hooks/useUsers';
import { useModal } from '@/context/modal/ModalContext';
import { useToast } from '@/context/toast/ToastContext';
import UsersTable from './usersTable//UsersTable';
import AddUserModal from './modals/AddUserModal';
import Button from '@/components/button/Button';

const HomePage = () => {
    const {
        users,
        loading,
        error,
        addUser,
        editUser,
        removeUser
    } = useUsers();

    const { openModal } = useModal();
    const { addToast } = useToast();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="home">
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center justify-between pt-2 mb-2">
                            <h1 className=''>Users</h1>
                            <button onClick={() => addToast({ message: 'User added successfully!', type: 'success', duration: 2500 })}>
                                Fire toast
                            </button>
                            <Button
                                variant="primary"
                                icon={{ name: 'IconUser', position: 'right', size: 16, }}
                                onClick={() => openModal(AddUserModal, { addUser })}
                            >
                                New User
                            </Button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <UsersTable 
                                users={users}
                                loading={loading}
                                error={error}
                                editUser={editUser}
                                removeUser={removeUser}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HomePage