
import { useState } from 'react';
import { useUsers } from '@/hooks/useUsers';
import { usePageMeta } from "@/hooks/usePageMeta";
import { useModal } from '@/context/modal/ModalContext';
import { useUserFilter, useUserSort } from '@/hooks/useUserFilter';

import UserSearch from './userSearch/UserSeach';
import UsersTable from './usersTable//UsersTable';
import AddUserModal from './modals/AddUserModal';
import Button from '@/components/button/Button';
import RouterLink from '@/components/navigation/RouterLink/RouterLink';

const HomePage = () => {
    const { users, loading, error, addUser, editUser, removeUser } = useUsers();
    usePageMeta({
        title: "Good Day",
        icon: "/icons/vite.svg",
    })
    const { openModal } = useModal();

    const [search, setSearch] = useState('');
    const filteredUsers = useUserFilter(users, search);
    const sortedUsers = useUserSort(filteredUsers);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="home">

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-2 mb-2">
                            <h1 className='mb-2'>Projects</h1>
                            <RouterLink to='/isa' className='item-button'>ISA</RouterLink>
                            <RouterLink to='/contact' className='item-button'>Contact</RouterLink>
                        </div>
                    </div>
                </div>
            </section>


            <section className='d-none'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center justify-between pt-2 mb-2">
                            <h1 className=''>Users list</h1>
                            <Button
                                variant="primary"
                                icon={{ name: 'IconPlus', position: 'right', size: 16, }}
                                onClick={() => openModal(AddUserModal, { addUser })}
                            >
                                New User
                            </Button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mb-2">
                            <UserSearch search={search} onSearch={setSearch} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            {sortedUsers.length > 0 ? (
                                <UsersTable
                                    users={sortedUsers}
                                    loading={loading}
                                    error={error}
                                    editUser={editUser}
                                    removeUser={removeUser}
                                />
                            ) : (
                                <div className="no-users">
                                    <p>No users found..</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HomePage