import { useModal } from '@/context/modal/ModalContext';
import './UsersTable.scss'
import Table from "@/components/table/Table"
import TableHead from "@/components/table/TableHead"
import TableBody from "@/components/table/TableBody"
import TableRow from "@/components/table/TableRow"
import TableCell from "@/components/table/TableCell"

import UpdateUserModal from '@/pages/crud/modals/UpdateUserModal'

const UsersTable = ({ users, editUser, removeUser }) => {

    const { openModal } = useModal();

    const table = {
        head: [
            { className: '', header: true, label: `ID` },
            { className: '', header: true, label: `Full Name` },
            { className: '', header: true, label: `Email` },
            { className: '', header: true, label: `Password` },
            { className: 'align-right', header: true, label: `Type`, },
        ],
    }

    return(
        <Table striped>
            <TableHead>
                <TableRow>
                    {table.head?.map((head,index) => (
                        <TableCell key={index} className={head.className} header={head.header}>{head.label}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell className='item item-link' onClick={()=>openModal(UpdateUserModal,{user,editUser,removeUser})}>{user.id}</TableCell>
                        <TableCell className='item capitalize'>{user.firstName} {user.lastName}</TableCell>
                        <TableCell className='item lowercase'>{user.email}</TableCell>
                        <TableCell><input className='item item-input' name="password" id={`password-${user.id}`} type="password" value={user.password} disabled/></TableCell>
                        <TableCell className='item align-right capitalize'>{user.type}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default UsersTable