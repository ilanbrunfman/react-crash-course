const TableCell = ({ children, header, className, onClick }) => {
    const Tag = header ? "th" : "td"

    return <Tag className={`table-cell${className ? ` ${className}` : ''}`}  onClick={onClick}>{children}</Tag>
}

export default TableCell
