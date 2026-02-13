const TableRow = ({ children, onClick, className }) => {
    return <tr className={`table-row${className ? ` ${className}` : ''}`} onClick={onClick}>{children}</tr>
}

export default TableRow
