import { useModal } from '@/context/modal/ModalContext';
import './UsersTable.scss'
import Table from "@/components/table/Table"
import TableHead from "@/components/table/TableHead"
import TableBody from "@/components/table/TableBody"
import TableRow from "@/components/table/TableRow"
import TableCell from "@/components/table/TableCell"

import UpdateUserModal from '@/pages/home/modals/UpdateUserModal'

const UsersTable = ({ users, editUser, removeUser }) => {

    const { openModal } = useModal();

    const table = {
        head :{
            className: 'table-row-head',
            columns: [
                { className: '', header: true, label: `ID` },
                { className: '', header: true, label: `Full Name` },
                { className: '', header: true, label: `Email` },
                { className: '', header: true, label: `Password` },
                { className: 'align-right', header: true, label: `Type`, },
            ]
        },
    }

    return(
        <Table>
            <TableHead>
                <TableRow className={table.head.className}>
                    {table.head.columns?.map((head,index) => (
                        <TableCell key={index} className={head.className} header={head.header}>{head.label}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id} className="">
                        <TableCell className='list'>{user.id}</TableCell>
                        <TableCell className='list list-link' onClick={ () => openModal(UpdateUserModal, { user, editUser, removeUser }) }>{user.firstName} {user.lastName}</TableCell>
                        <TableCell className='list lowercase'>{user.email}</TableCell>
                        <TableCell><input className='list list-input' type="password" value={user.password} disabled/></TableCell>
                        <TableCell className='list align-right'>{user.type}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default UsersTable