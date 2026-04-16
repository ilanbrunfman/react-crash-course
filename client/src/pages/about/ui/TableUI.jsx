import { useTablePagination } from "@/hooks/useTablePagination"
import Table from "@/components/table/Table"
import TableHead from "@/components/table/TableHead"
import TableBody from "@/components/table/TableBody"
import TableRow from "@/components/table/TableRow"
import TableCell from "@/components/table/TableCell"
import Pagination from "@/components/table/Pagination"

 const tableData = {
    config: {},
    head: {
        className: 'table-row-head',
        columns: [
            { className: '', header: true, label: `Name` },
            { className: '', header: true, label: `Email` },
            { className: 'align-right', header: true, label: `Role`, },
        ]
    },
    body: [
        {
            id: 1,
            className: '',
            columns: [
                { className: '', label: `Jane Smith` },
                { className: '', label: `jane.smith@email.com` },
                { className: 'align-right', label: `Guest` },
            ]
        },
        {
            id: 2,
            className: '',
            columns: [
                { className: '', label: `Michael Brown` },
                { className: 'test', label: `michael.b@email.com` },
                { className: 'align-right', label: `Customer` },
            ]
        },
        {
            id: 3,
            className: '',
            columns: [
                { className: '', label: `Emily Davis` },
                { className: '', label: `emily.d@email.com` },
                { className: 'align-right', label: `Admin` },
            ]
        },
        {
            id: 4,
            className: '',
            columns: [
                { className: '', label: `Chris Wilson` },
                { className: '', label: `chris.w@email.com` },
                { className: 'align-right', label: `Guest` },
            ]
        },
        {
            id: 5,
            className: '',
            columns: [
                { className: '', label: `Sophia Martinez` },
                { className: '', label: `sophia.m@email.com` },
                { className: 'align-right', label: `Customer` },
            ]
        },
        {
            id: 6,
            className: '',
            columns: [
                { className: '', label: `Daniel Anderson` },
                { className: '', label: `daniel.a@email.com` },
                { className: 'align-right', label: `Guest` },
            ]
        },
        {
            id: 7,
            className: '',
            columns: [
                { className: '', label: `Olivia Thomas` },
                { className: '', label: `olivia.t@email.com` },
                { className: 'align-right', label: `Admin` },
            ]
        },
        {
            id: 8,
            className: '',
            columns: [
                { className: '', label: `James Taylor` },
                { className: '', label: `james.t@email.com` },
                { className: 'align-right', label: `Customer` },
            ]
        },
        {
            id: 9,
            className: '',
            columns: [
                { className: '', label: `Ava Moore` },
                { className: '', label: `ava.moore@email.com` },
                { className: 'align-right', label: `Guest` },
            ]
        },
        {
            id: 10,
            className: '',
            columns: [
                { className: '', label: `William Clark` },
                { className: '', label: `william.c@email.com` },
                { className: 'align-right', label: `Admin` },
            ]
        }

    ],
}

const TableUI = () => {

    const { paginatedData, page, totalPages, next, prev } = useTablePagination(tableData.body, 8)

    return (
        <div className="good-day ">
            <div className="row">
                <div className="col-12">
                    <h1 className="mb-2">Table List UI</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb-2">
                    {paginatedData?.length > 0 ? <Table striped hoverable>
                        <TableHead>
                            <TableRow className={tableData.head.className}>
                                {tableData.head.columns?.map((head,index) => (
                                    <TableCell key={index} className={head.className} header={head.header}>{head.label}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedData.map((row) => (
                                <TableRow key={row.id} className={row.className}>
                                    {row.columns?.map((cell, i) => (
                                        <TableCell key={i} className={cell.className}>{cell.label}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table> : 'List is empty' }
                </div>

                <div className="col-12">
                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        next={next}
                        prev={prev}
                    />
                </div>
            </div>
        </div>
    )
}


export default TableUI