import { useModal } from '@/context/modal/ModalContext';
import './UsersTable.scss'

import UpdateUserModal from '@/pages/home/modals/UpdateUserModal'

const UsersTable = ({ users, editUser, removeUser }) => {

     const { openModal } = useModal();

    return(
        <div className='table'>
            <div className='table-header'>
                <div className="row">
                    <h3 className='label'>ID</h3>
                    <h3 className='label'>Full Name</h3>
                    <h3 className='label'>Email</h3>
                    <h3 className='label'>Password</h3>
                    <h3 className='label'>Type</h3>
                </div>
            </div>
            <div className='table-body'>
                {users?.map((user) => (
                    <div key={user.id} className='row'>
                        <p className='list'>{user.id}</p>
                        <p className='list list-link' onClick={ () => openModal(UpdateUserModal, { user, editUser, removeUser }) }>{user.firstName} {user.lastName}</p>
                        <p className='list lowercase'>{user.email}</p>
                        <input className='list list-input' type="password" value={user.password} disabled/>
                        <p className='list'>{user.type}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UsersTable